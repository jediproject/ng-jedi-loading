# ciandt-components-loading
Loading component written in angularjs. This component install an http interceptor that starts a loading icon and close it after the response.  it's a complement to the angular-loading-bar component. The angular-loading-bar run without blocking the page and, if necessary, you can use ciandt-components-loading to show a loading sign that blocks the page. 
Another feature is available, it's possible to show a message after responses where the requests submit a json and this requests are not a GET method. See more below.

### Install

* Install the dependency:

   ```shell
   bower install ciandt-components-loading --save
   ```
* Add loading.js and loading-directives.js to your code:

   ```html
   <script src='assets/libs/ciandt-components-loading/loading.js'></script>
   <script src='assets/libs/ciandt-components-loading/loading-directives.js'></script>
   ```
   - note that the base directory used was assets/libs, you should change bower_components to assets/libs or move from bower_components to assets/libs with grunt.
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['ciandt.components.loading']);
   ```
======

### How To Use

1. **Enable info after request and/or custom info message**

   ```javascript
   app.config(['ciandt.components.loading.LoadingConfig', function(LoadingConfig){
      LoadingConfig.enableInfoAfterResponse = true; // default is false
      LoadingConfig.infoAfterResponseMessage = "yourMessage";
   }]);
   ```
   - default templates are stored in ciandt-components-dialogs/dialogs-alert.html and ciandt-components-dialogs/dialogs-confirm.html
2. **Enable only loading block**

   ```javascript
   app.config(['ciandt.components.loading.LoadingConfig', function(LoadingConfig){
      LoadingConfig.enableLoadingBar = false; // default is true
      LoadingConfig.enableLoadingBlock = true; // default is false
   }]);
   ```
3. **Ignore loading bar on a request**

   ```javascript
   $http.get('yourUrl', {ignoreLoadingBar: true});
   ```
4. **Show loading block on a request**

   ```javascript
   $http.get('yourUrl', {showLoadingModal: true});
   ```
5. **Add app-loading directive in your html**

   ```html
   <app-loading></app-loading>
   ```
6. **If necessary, to customize the default template, use the templateUrl attribute to do this**

   ```html
   <app-loading templateUrl="app/common/components/loading/loading.html"></app-loading>
   ```
   - the default template is stored in ciandt-components-loading/loading.html