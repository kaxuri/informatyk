'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from '@/components/Navbar'
export default function HTMLPlayground() {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>\n<p>Welcome to the HTML, CSS, and JavaScript Playground!</p>\n<button id="changeColor">Change Color</button>')
  const [cssCode, setCssCode] = useState('body {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n}\n\nh1 {\n  color: #333;\n}\n\nbutton {\n  padding: 10px;\n  background-color: #4CAF50;\n  color: white;\n  border: none;\n  cursor: pointer;\n}')
  const [jsCode, setJsCode] = useState('document.getElementById("changeColor").addEventListener("click", function() {\n  document.body.style.backgroundColor = getRandomColor();\n});\n\nfunction getRandomColor() {\n  var letters = "0123456789ABCDEF";\n  var color = "#";\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}')
  const [iframeKey, setIframeKey] = useState(0)

  useEffect(() => {
    // Refresh iframe when htmlCode, cssCode, or jsCode changes
    setIframeKey(prevKey => prevKey + 1)
  }, [htmlCode, cssCode, jsCode])

  const combinedCode = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `

  return (
    <div className="container mx-auto py-8">
        <Navbar></Navbar>
      <h1 className="text-3xl font-bold mb-8">Kompilator HTML & CSS</h1>
      <div className="bg-[#ff000026] my-4  border-red-600 rounded-lg text-[#ff3737] px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"><svg className="fill-current h-6 w-6 text-[#ff3737] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="font-bold text-s">Wersja Beta (Mogą występować błędy)</p>
      <p className="text-xs">Kompilator jest obecnie testowany i może powodować błędy bądz całkowity restart strony.Nie zalecane jest tworzenie tu większych projektów</p>
    </div>
  </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <Tabs defaultValue="html" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="html">HTML</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="js">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="html">
              <textarea
                className="w-full h-[calc(100vh-300px)] p-2 border border-[#0a0a0a] bg-black text-white font-mono resize-none"
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                placeholder="Enter your HTML code here..."
              />
            </TabsContent>
            <TabsContent value="css">
              <textarea
                className="w-full h-[calc(100vh-300px)] p-2 bg-black text-white font-mono resize-none"
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                placeholder="Enter your CSS code here..."
              />
            </TabsContent>
            <TabsContent value="js">
              <textarea
                className="w-full h-[calc(100vh-300px)] p-2 bg-black text-white font-mono resize-none"
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                placeholder="Enter your JavaScript code here..."
              />
            </TabsContent>
          </Tabs>
        </Card>
        <Card className="p-4">
          <iframe
            key={iframeKey}
            className="w-full h-[calc(100vh-200px)] bg-white"
            srcDoc={combinedCode}
            title="HTML, CSS, and JavaScript Preview"
            sandbox="allow-scripts"
          />
        </Card>
      </div>
      <p className='text-center pt-6 text-xs text-gray-700'>© Akumadev  {new Date().getFullYear()}</p>
    </div>
  )
}

