"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Music, Camera, Film, Users, Search } from "lucide-react"
import ParticleBackground from "./particle-background"
import EventPath from "@/components/event-path"
import AnimatedLogo from "@/components/AnimatedLogo"
 
export default function Page() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])

  const events = [
    {
      title: "Solo Dance",
      icon: <Users className="h-6 w-6" />,
      description: "Showcase your dance moves and compete for amazing prizes",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Singing",
      icon: <Music className="h-6 w-6" />,
      description: "Let your voice shine in our singing competition",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "Group Dance",
      icon: <Users className="h-6 w-6" />,
      description: "Team up and create spectacular dance performances",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Photography",
      icon: <Camera className="h-6 w-6" />,
      description: "Capture moments and share your perspective",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Treasure Hunt",
      icon: <Search className="h-6 w-6" />,
      description: "Solve clues and find hidden treasures across campus",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      title: "Short Film",
      icon: <Film className="h-6 w-6" />,
      description: "Show your storytelling skills through short films",
      gradient: "from-red-500 to-pink-500",
    },
    {
      title: "Battle of Bands",
      icon: <Music className="h-6 w-6" />,
      description: "Rock the stage with your band",
      gradient: "from-violet-500 to-purple-500",
    },
  ]

  const eventImages = [
    "https://e7.pngegg.com/pngimages/970/663/png-clipart-solo-dance-hip-hop-dance-concert-dance-dance-computer-wallpaper-indian-classical-dance.png",
    "https://nadiasmelser.com/wp-content/uploads/2018/03/Singing-As-You-Speak.jpg",
    "https://img.freepik.com/free-vector/people-dancing-background_1048-7872.jpg",
    "https://plus.unsplash.com/premium_photo-1674389991678-0836ca77c7f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1154634349/photo/treasure-map.jpg?s=2048x2048&w=is&k=20&c=ThuLh1_-7GKp4NF7mbihBwlt03VDqpvJ5EvmC167VUY=",
    "https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682855222030-e1f8f292c9c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  ];
  

  return (
    <div className="min-h-screen  bg-[#0D001A] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
        <ParticleBackground />
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-violet-600/20 to-cyan-500/20" />
       
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
            alt="Concert background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
       <div className="absolute gap-2 flex top-2 left-2 items-center overflow-visible">
  <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmBmBzZ-QJuhAmeZPW6DHwD7zpDvY1EpH4w&s"
    alt="Logo"
    width={60}
    height={60}
    className="object-contain transition-transform duration-700 bg-transparent"
  />
  <div className="text-white">
    <h1 className="text-lg font-bold">VIGNAN</h1>
    <h3 className="text-sm">Institute of Technology & Science</h3>
    <hr className="my-1 border-white" />
    <h4 className="text-sm">AN AUTONOMOUS INSTITUTE</h4>
    <p className="text-xs">Vignan Hills Near Ramoji Film City, Deshmukhi</p>
    <p className="text-xs">Pochampally, Hyderabad, T.G.</p>
  </div>
</div>

        <motion.div style={{ y }} className="container relative z-10 px-4 mx-auto text-center">
        
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <AnimatedLogo />

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
                Silver Jubilee Celebration
              </motion.span>
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 text-violet-400" />
                <span className="text-lg">March 20th & 21st, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-violet-400" />
                <span className="text-lg">Vignan Institute of Technology & Science</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0D001A] to-transparent" />
      </section>

      {/* Main Events Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 to-cyan-500/10" />
        <div className="container px-4 mx-auto relative">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Events
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Live Concert Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full md:col-span-1"
            >
              <Card className="relative overflow-hidden h-[300px] group bg-gradient-to-br from-violet-900/50 to-cyan-900/50 backdrop-blur-xl border-violet-500/20">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
                  alt="Live Concert"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end group-hover:from-violet-900/80">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    Live Concert
                  </h3>
                  <p className="text-white/90">Experience an electrifying night of live music</p>
                </div>
              </Card>
            </motion.div>

            {/* DJ Night Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-full md:col-span-1"
            >
              <Card className="relative overflow-hidden h-[300px] group bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl border-cyan-500/20">
                <Image
                  src="https://img1.exportersindia.com/product_images/bc-full/2020/9/6868292/dj-night-party-services-1600770259-5590905.jpeg"
                  alt="DJ Night"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end group-hover:from-cyan-900/80">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    DJ Night
                  </h3>
                  <p className="text-white/90">Dance the night away with our amazing DJs</p>
                </div>
              </Card>
            </motion.div>

            {/* Fashion Show Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-full md:col-span-1"
            >
              <Card className="relative overflow-hidden h-[300px] group bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl border-purple-500/20">
                <Image
                  src="https://images.unsplash.com/photo-1469488865564-c2de10f69f96"
                  alt="Fashion Show"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end group-hover:from-purple-900/80">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    Fashion Show
                  </h3>
                  <p className="text-white/90">Witness the fusion of style and creativity</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitions & Activities Section */}   
      <section className="relative py-20">
  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-violet-600/10" />
  <div className="container px-4 mx-auto relative">
    <motion.h2
      className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Competitions & Activities
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
      {events.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-4 group transition-all duration-300 bg-white/10 backdrop-blur-lg border border-white/20 hover:shadow-2xl hover:border-white/40">
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src={eventImages[index]}
                alt={event.title}
                fill
                className="object-cover"
              />
              {/* Optional overlay for enhanced effect */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold mb-1 text-white">{event.title}</h3>
            <p className="text-gray-300 text-sm">{event.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-500/20" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="container px-4 mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              Join Us in the Celebration!
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Be part of Vignan&apos;s biggest cultural extravaganza as we celebrate our Silver Jubilee
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
