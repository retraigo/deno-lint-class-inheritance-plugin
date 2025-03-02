# Class Inheritance Plugin
## Avoid Method Inheritance

### Why this may be useful
If a class inherits non-static methods that it does not need to override or modify, it may be an 
unnecessary inheritance of behavior. Such methods may be moved to utility functions instead.

### Why this may be annoying
This rule may push you into over-engineering your code when inheritance is the simplest approach.