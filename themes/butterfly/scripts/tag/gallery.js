/**
 * Butterfly
 * galleryGroup and allery
 */

'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo)

function gallery (args, content) {
  return `<div class="fj-gallery">${hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('')}
          </div>`
}

function galleryGroup(args) {
  const name = args[0]
  const desrc = args[1]
  const url = urlFor(args[2])
  const img = urlFor(args[3])

  return `
  <figure class="gallery-group">
  <img class="gallery-group-img no-lightbox" src='${img}' alt="Group Image Gallery">
  <figcaption>
  
  <div class="gallery-group-main">
  {% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
  {% galleryGroup '哈利波特' '关于HP的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
  {% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
  </div>

  <p>${desrc}</p>
  <a href='${url}'></a>
  </figcaption>
  </figure>
  `
}


hexo.extend.tag.register('gallery', gallery, { ends: true })
hexo.extend.tag.register('galleryGroup', galleryGroup)
