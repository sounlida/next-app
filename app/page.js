'use client'
 
import { sendGTMEvent } from '@next/third-parties/google'
 
export function EventButton() {
  return (
    <div>
      <button
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'GTM-WKJGWQQ' })}
      >
        Send Event
      </button>
    </div>
  )
}
