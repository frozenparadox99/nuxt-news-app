import Vue from 'vue'
import { formatDistanceToNow } from 'date-fns'

Vue.filter('publishedTimeToNow', time => {
  return `${formatDistanceToNow(time)} ago`
})

Vue.filter('commentTimeToNow', timestamp => {
  const timeElapsed = formatDistanceToNow(timestamp, {
    includeSeconds: true
  })
  return `${timeElapsed} ago`
})
