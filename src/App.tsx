import { useState } from "react"
import axios from 'axios'
import { Loader } from "./Loader"

export function App() {
  const [dogImageUrl, setDogImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchRandomImage() {
    setIsLoading(true)
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    setDogImageUrl(response.data.message)
    setIsLoading(false)
  }

  return (
    <main className="
      min-w-full min-h-screen text-gray-200
      flex items-center justify-center flex-col 
    ">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-lg md:text-2xl text-center">Clique no botão para gerar uma foto aleatória de um cachorro!</h1>
        {isLoading ? <Loader /> : dogImageUrl && (
          <img src={dogImageUrl} alt="Foto de um cachorro" className="max-w-xs mg:max-w-lg flex-shrink"/>
        )}
        <button 
          onClick={fetchRandomImage} 
          disabled={isLoading} 
          className="p-4 border-2 rounded-md disabled:opacity-50 hover:border-cyan-700 hover:text-cyan-400 hover:transition-colors"
        >
            Clique aqui!
        </button>
      </div>
    </main>
  )
}

