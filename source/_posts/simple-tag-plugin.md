---
title: Viết plugin cho Hexo
date: 2020-02-06 23:15:43
categories:
- Code
tags:
---

Blog đang trống, GitHub cũng chẳng có gì.
Thôi thì cũng đang rảnh.
Tôi xách phím di làm thợ nề, xây thêm cái tường GitHub ít gạch.
{% asset_img github_graph.png %}

**TL;DR**
[GitHub repository](https://github.com/tuanna-hsp/hexo-tag-wikipedia)
<!-- more -->

Thực ra cũng tò mò muốn làm thử một cái plugin cho Hexo xem thế nào.

### Chọn gạch
Dùng Hexo mấy lần, thỉnh thoảng lướt trang [plugin](https://hexo.io/plugins/) xem có gì hay.
Thấy có một số plugin embed được cả Youtube, Instagram… vào post. Khá cool.

Uhm, Wikipedia thì sao, có vẻ chưa có ai làm.
Eureka.

### Chọn xi măng
Làm sao lấy được dữ liệu Wiki về -> [API](https://www.mediawiki.org/wiki/API:Main_page)
Làm sao hiển thị trên bài viết -> xem [doc của Hexo](https://hexo.io/api/tag)

### Xây

Tạo package mới
```bash
$ mkdir hexo-tag-wikipedia
$ cd hexo-tag-wikipedia
$ npm init
```

Nghĩ trong đầu trước dùng plugin này như thế nào: trong file Markdown, khi tôi viết `{ % wikipedia title:xxx % }` thì plugin này sẽ thay đoạn trên bằng một đoạn mã HTML chứa nội dung lấy từ trang Wikipedia có title là `xxx`. Có thể tuỳ chọn hiện link đến trang Wiki, chọn được ngôn ngữ.

Okay.

Tạo file `index.js`, viết mã để sinh HTML từ tag của Markdown.
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
Điểm chốt của đoạn mã này là dòng cuối cùng, ta sẽ đăng ký vào flow generate trang của Hexo rằng: khi nào mày gặp tag tên là `wikipedia`, gọi hàm `generateWikipediaTagHtml`, rồi lấy đoạn HTML sinh được thêm vào trang web cho tao nhé.

Kết quả:

```
{% wikipedia title:KISS_principle wikiButton:true %}
```
{% wikipedia title:KISS_principle wikiButton:true %}

### Kết
Đẩy lên [GitHub](https://github.com/tuanna-hsp/hexo-tag-wikipedia).
Đăng ký account trên NPM, ấn [publish package](https://www.npmjs.com/package/hexo-tag-wikipedia).
Ồ, không quên đẩy plugin lên trang [Hexo documentation](https://hexo.io/docs/plugins.html#Publishing), hên xui sẽ có ai đó xài.