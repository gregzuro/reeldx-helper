## reeldx-helper

### Purpose

Chrome plugin for various tasks.

This plugin initially does one thing: create a JWT using the three data items on the [ReelDx Application edit page][] (click on the pencil in the last column of one of your applications): 

- Application Nane
- Public Key
- Private Key

The created token has a one hour lifetime.

We expect that additional functionality will be added.

### Installing

The [plugin is available][] in the Chrome Web Store.

### Building

The plugin was developed using the general [approach described here][].

- $ git clone \<this\>
- $ bower install
- $ grunt build 

### Warning

As noted [on this page][] about Chrome's Content Security Policy:


>####Evaluated JavaScript
>The policy against eval() and its relatives like setTimeout(String), setInterval(String), and new Function(String) can be relaxed by adding 'unsafe-eval' to your policy:

>```
>"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self'"
>```
>
>However, we strongly recommend against doing this. These functions are notorious XSS attack vectors.


Note that this plugin **does** relax the policy against eval() as described.
This is done in order to accommodate the [JWT JavaScript library][] that is used to generate the token.

### References

[ReelDx Application edit page]
[ReelDx Application edit page]: https://mercury.reeldx.com/#/applications
[Plugin from Chrome Web Store][plugin is available]
[plugin is available]: https://chrome.google.com/webstore/detail/reeldx-helper/knkfdknomegobbjlaehpaggjbigpgdfp
[Development approach][approach described here]
[approach described here]: http://www.phase2technology.com/blog/so-you-want-to-build-a-chrome-extension/
[Chrome Security Policy][on this page]
[on this page]: https://developer.chrome.com/extensions/contentSecurityPolicy
[JWT javascript library][]
[JWT javascript library]: http://kjur.github.io/jsjws/
