const { configureAxe } = require('jest-axe')

const axe = configureAxe({
  rules: {
    'image-alt': {enabled: false},
    'list': {enabled: false},
  }, 
  impactLevels: ['critical','serious','moderate','minor']
})

module.exports = axe