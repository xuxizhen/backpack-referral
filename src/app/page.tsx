import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join <span className="text-purple-400">Backpack</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The crypto trading platform built for the community
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get started with Backpack - the fastest, most intuitive crypto exchange. 
            Choose your community below and join thousands of traders worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Meme Traders</h3>
            <p className="text-gray-300 mb-6">
              Join the meme coin revolution. Trade the hottest tokens with lightning speed.
            </p>
            <a
              href="https://backpack.exchange/join/meme"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Meme Community
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🌏</div>
            <h3 className="text-2xl font-bold text-white mb-4">中文社区</h3>
            <p className="text-gray-300 mb-6">
              专为中文用户设计的加密货币交易平台。安全、快速、易用。
            </p>
            <a
              href="https://backpack.exchange/join/zh-cn"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              加入中文社区
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-white mb-4">LOL Gamers</h3>
            <p className="text-gray-300 mb-6">
              Game on! Trade crypto like you play - with strategy, skill, and community.
            </p>
            <a
              href="https://backpack.exchange/join/lol"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Gaming Community
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Backpack?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="text-lg font-semibold text-white mb-2">Lightning Fast</h4>
                <p className="text-gray-300">Execute trades in milliseconds</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="text-lg font-semibold text-white mb-2">Secure</h4>
                <p className="text-gray-300">Bank-grade security for your assets</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌟</div>
                <h4 className="text-lg font-semibold text-white mb-2">Community First</h4>
                <p className="text-gray-300">Built by traders, for traders</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <a href="https://backpack.exchange/" className="text-purple-400 hover:text-purple-300 underline">
              Sign in to Backpack
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
