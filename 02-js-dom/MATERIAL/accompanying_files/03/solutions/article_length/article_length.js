'use strict'

const articleSizeCssClass = contentLength => {
    if (contentLength <= 3000) return 'coffe_break_article'
    if (contentLength <= 9000) return 'normal_length_article'
    return 'lone_weekend_article'
}

const $ = q => document.querySelector(q)
const contentLength = () => $('#content').innerHTML.length

$('h1').classList.add(articleSizeCssClass(contentLength()))
