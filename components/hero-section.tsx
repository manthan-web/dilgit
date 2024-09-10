'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone } from 'lucide-react'

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-purple-900 md:px-24 to-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-center lg:text-left">
              Buy Diljit Dosanjh Tickets in <span className="text-purple-400">Black</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 text-center lg:text-left">
              Dont miss out on the hottest concert of the year! Get your Diljit Dosanjh tickets now and enjoy an incredible <span className="text-yellow-400 font-bold">50% discount</span>. Limited time offer!
            </p>
            <div className="flex justify-center lg:justify-start">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-lg">
                    Contact for Tickets
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">Contact Information</DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center justify-center space-x-4 py-8">
                    <Phone className="h-8 w-8 text-purple-600" />
                    <span className="text-3xl font-semibold">+91 98721 21303</span>
                  </div>
                  <p className="text-center text-lg text-gray-600">
                    Call now to secure your discounted Diljit Dosanjh tickets!
                  </p>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <Image
              src="/download.jpg"
              alt="Diljit Dosanjh"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
