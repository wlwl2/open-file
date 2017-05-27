### 0.1.0 - Initial development
* Started development.

#### Notes:

From: http://semver.org/

Given a version number MAJOR.MINOR.PATCH, increment the:
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.

Major version zero (0.y.z) is for initial development.
Anything may change at any time.
The public API should not be considered stable.

From: https://docs.npmjs.com/getting-started/semantic-versioning

##### Semver for publishers

If a project is going to be shared with others, it should start at 1.0.0, though some projects on npm don't follow this rule.

After this, changes should be handled as follows:

Bug fixes and other minor changes:  
Patch release, increment the last number, e.g. 1.0.1  

New features which don't break existing features:  
Minor release, increment the middle number, e.g. 1.1.0

Changes which break backwards compatibility:  
Major release, increment the first number, e.g. 2.0.0

##### Semver for consumers

As a consumer, you can specify which kinds of updates your app can accept in the package.json file.

If you were starting with a package 1.0.4, this is how you would specify the ranges:

Patch releases: 1.0 or 1.0.x or ~1.0.4  
Minor releases: 1 or 1.x or ^1.0.4  
Major releases: * or x
