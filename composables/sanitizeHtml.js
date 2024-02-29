import sanitizeHtml from 'sanitize-html'

export const sanitize = (value) => sanitizeHtml(value)