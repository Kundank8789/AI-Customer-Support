'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { motion } from 'motion/react'

function EmbedClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter()
  const [copied, setCopied] = useState(false)
  const embedCode = `<script
   src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js"
    data-owner-id="${ownerId}">
    </script>`
  const copyCode = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <div className='min-h-screen bg-zinc-50 text-zinc-900'>
      <div className='sticky top-0 z-40 bg-white border-b border-zinc-200'>
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div className='text-lg font-semibold cursor-pointer' onClick={() => navigate.push("/")}>Support<span className='text-zinc-400'>AI</span></div>
          <button className='px-4 py-2 rounded-lg border border-zinc-300 hover:bg-zinc-100 transition' onClick={() => navigate.push("/dashboard")}>Back to Dashboard</button>
        </div>

      </div>

      <div className='flex justify-center px-4 py-14'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0.5 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10'
        >
          <h1 className='text-2xl font-semibold mb-2'>Embed ChatBot</h1>
          <p>Copy and paste this code before<code>&lt;/body&gt;</code></p>
          <div className='relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10'>
            <pre className='overflow-x-auto'>{embedCode}</pre>
            <button className='absolute top-3 right-3 bg-white text-zinc-900 text-sm font-medium px-3 py-1.5  rounded-lg hover:bg-zinc-200 transition' onClick={copyCode}>
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>

          <ol className='space-y-3 text-sm text-zinc-600 list-decimal list-inside'>
            <li>Copy embed script</li>
            <li>Paste it before the closing body tag</li>
            <li>Reload your website</li>
          </ol>

          <div className='mt-14'>
            <h1 className='text-lg font-medium mb-2'>Live Preview</h1>
            <p className='text-sm text-zinc-500 mb-6'>After embedding, you should see the chatbot appear on your website.</p>
          </div>

          <div className='rounded-xl border border-zinc-300 bg-white shadow-md overflow-hidden'>
            <div className='flex items-center gap-2 px-4 h-9 bg-zinc-100 border-b border-zinc-200'>
              <span className='w-2.5 h-2.5 rounded-full bg-red-400' />
              <span className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
              <span className='w-2.5 h-2.5 rounded-full bg-green-400' />
              <span className='ml-auto text-xs text-zinc-500'>Your-Website.com</span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default EmbedClient