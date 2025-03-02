const plugin: Deno.lint.Plugin = {
    name: "class-inheritance-plugin",
    rules: {
      "avoid-method-inheritance": {
        create(context) {
          return {
            ClassDeclaration(node) {
              const superClass = node.superClass;
              if (!superClass || superClass?.type !== "Identifier") return;
              const superClassItem = context.sourceCode.ast.body.find((x) =>
                x.type === "ClassDeclaration" && x.id?.name === superClass.name
              );
              if (!superClassItem || superClassItem.type !== "ClassDeclaration") {
                return;
              }
              const body = node.body;
              const superClassBody = superClassItem.body;
              for (const member of superClassBody.body) {
                if (member.type === "MethodDefinition" && !member.static) {
                  if (member.key.type === "Identifier") {
                    const keyName = member.key.name;
                    const exists = body.body.find((x) =>
                      x.type === "MethodDefinition" &&
                      x.key.type === "Identifier" &&
                      x.key.name === keyName
                    );
                    if (!exists) {
                      context.report({
                        node,
                        message:
                          `Method "${member.key.name}" must not be inherited from the superclass.`,
                        hint:
                          `Override the method "${member.key.name}" with a custom implementation instead.`,
                      });
                    }
                  }
                }
              }
            },
          };
        },
      },
    },
  };
  export default plugin;
  