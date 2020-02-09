---
title: Writing a simple Hexo plugin
date: 2020-02-06 23:15:43
categories:
- Dev
tags:
---

Hexo has quite a catalog of [plugins](https://hexo.io/plugins/), which makes it easy to add additional functionalities to an already awesome blogging framework.
But when I was writing [my last blog](/2019/12/04/mf-advent-calendar-day-4/), I noticed there is not yet a plugin to quote content from Wikipedia.
I had needed to show a lot of book summarizes into that blog post.
<!-- more -->

- There is no way but to manually copy Wiki contents into my post.
- Those contents won’t be updated automatically when someone edits the Wiki page.

Seems like it’s time to ~~get your hand dirty and~~ paint that little GitHub wall.
{% asset_img github_graph.png %}

**TL;DR**
[GitHub repository](https://github.com/tuanna-hsp/hexo-tag-wikipedia)

### Some ideas to begin with
- A Hexo tag plugin, that allows me to embed the Wiki subtract (for now) into my blog post.
- The subtract should be pulled from Wiki when rendering the post, to always get the latest updates.
- An optional “Read more on Wikipedia” button linked to the full Wiki article.
- An option to control how many lines you want to show.

That would be enough to get started.

### Google it
How can I pull data from Wiki? There must be some APIs somewhere.
{% asset_img wiki_search.jpg %}
Bingo! One step is done.

Next is how to write the plugin. It seems the documentation on Hexo site gives no clear instructions.
Maybe it would be faster I copy-cat code from an existing tag plugin. Fortunately, the Hexo [plugin list](https://hexo.io/plugins/) points me directly to the GitHub repository of some good candidates.
I read two or three code samples. And that good to go.

### Happy coding
After some fiddling, finally some real work.
First is creating a new `npm` package project.
```bash
$ mkdir hexo-tag-wikipedia
$ cd hexo-tag-wikipedia
$ npm init
```
After filling out some needed information like the package name, version, GitHub URL, the `package.json` will be created. We create an `index.js` file to write the actual code.
Since my use-case is fairly simple, it doesn’t take a dozen lines to make it done.
```javascript
function buildArgsHash(args) {
  let argsHash = {};
  args.forEach(arg => {
    const params = arg.split(':');
    argsHash[params[0]] = params[1];
  });

  return argsHash;
}

function generateWikipediaTagHtml(args, content){
  const argsHash = buildArgsHash(args);
  const title = argsHash[‘title’];

  const lang = argsHash[‘lang’] !== undefined ? argsHash[‘lang’] : ‘en’;
  const baseUrl = `https://${lang}.wikipedia.org`;

  const sentenceParam =
    argsHash['sentences'] !== undefined
      ? `&exsentences=${argsHash['sentences']}` : ''
  const url =
    `${baseUrl}/w/api.php?action=query&origin=*&prop=extracts`
      + `${sentenceParam}&format=json&exintro=&titles=${title}`;

  const tagId = `wiki-${title}`;
  const embeddedScript = `
    window.addEventListener(‘load’, function() {
      $.getJSON(‘${url}’, function(result) {
        const pages = result.query.pages;
        const firstPageIndex = Object.keys(pages)[0];
        const extract = pages[firstPageIndex].extract;
        $(‘#${tagId}’).prepend(extract);
      });
    });
  `;
  let contentText = `<script>${embeddedScript}</script>`;
  if (argsHash[‘wikiButton’] === ‘true’) {
    contentText += `<p><a href="${baseUrl}/wiki/${title}">Wikipedia</a></p>`;
  }

  return `<blockquote id=’${tagId}’>${contentText}</blockquote>`;
}

hexo.extend.tag.register(‘wikipedia’, generateWikipediaTagHtml);
```
The key to making a Hexo tag plugin is the last line of the above snippet- where you register the tag name with a function.
What happens is, when Hexo is generating HTML code from your markdown and it encounters a tag like `% wikipedia ... %`, it calls the registered function to get the appropriate HTML content, then replaces the tag with that HTML code.

Here is the result

```
{% wikipedia title:KISS_principle wikiButton:true %}
```
{% wikipedia title:KISS_principle wikiButton:true %}

### Publishing
I have registered an account and pushed my plugin to [npm repository](https://www.npmjs.com/package/hexo-tag-wikipedia). But somehow it took forever for `npm` to make the package available. So I just left it there and came back the next day to test my published package.
As the [Hexo documentation](https://hexo.io/docs/plugins.html#Publishing) says, we can also show our newly made plugin on the Hexo plugin page, by making a pull request to the Hexo site repository. Here is mine:
https://github.com/hexojs/site/pull/1257
It’s already merged so you can now see my plugin on the Hexo site.

### Conclusion
Making useful things isn’t so hard. Just mind your everyday use case to see if you have some pain, and if no one has already created the cure, you do it.