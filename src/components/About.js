import React from 'react'

export default function About() {
  const divstyle={
       fontStyle:"italic",
       fontWidth:"bolder",
       fontSize:"40px"
  }
  return (
    
    <div style={divstyle}>
        
        <div class="p-3 mb-2 bg-info-subtle text-info-emphasis">This application is built to offer real-time cricket scores with a simple and modern interface. It fetches detailed match data—including scorecards, fall of wickets, partnerships, and match status—using the Cricbuzz API. Each match page dynamically updates to reflect the latest innings, batting performances, and bowling statistics. The app is optimized for speed, accuracy, and a seamless viewing experience so fans can enjoy live cricket updates anytime.</div>
        
    </div>
  )
}
