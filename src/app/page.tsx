import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20">
          <div className="flex justify-center items-center mb-8">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mr-4">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              Backpack
            </h1>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-black mb-8">
            The crypto trading platform <br/>built for the community
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Experience the future of crypto trading with Backpack - the fastest, most intuitive exchange platform. 
            Join millions of traders worldwide and discover why we're the #1 choice for crypto enthusiasts.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">🎉 Limited Time Offer - Get Started Today!</h2>
            <p className="text-gray-700 mb-4">
              • Zero trading fees for your first 30 days<br/>
              • Instant deposits and withdrawals<br/>
              • Access to exclusive token launches<br/>
              • 24/7 premium customer support
            </p>
            <p className="text-sm text-gray-500">
              Join over 5 million traders who trust Backpack for their crypto journey
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-black mb-4">Meme Coin Masters</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Join the meme coin revolution! Trade $PEPE, $DOGE, $SHIB and discover the next 100x gem. 
              Lightning-fast execution, real-time alerts, and exclusive meme coin launches.
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🔥 Hot Right Now:</p>
              <p className="text-sm font-semibold">$BONK +127% • $WIF +89% • $POPCAT +156%</p>
            </div>
            <a
              href="https://backpack.exchange/join/meme"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Trading Memes Now →
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-5xl mb-6">🌏</div>
            <h3 className="text-2xl font-bold text-black mb-4">中文社区</h3>
            <p className="text-gray-600 mb-6 text-sm">
              专为华人用户打造的加密货币交易平台！中文客服、人民币入金、简体界面。
              安全合规，银行级别保障，让您的数字资产交易更安心。
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🎯 专属优势:</p>
              <p className="text-sm font-semibold">中文支持 • 快速入金 • 低手续费 • 7x24客服</p>
            </div>
            <a
              href="https://backpack.exchange/join/zh-cn"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              立即开始交易 →
            </a>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-5xl mb-6">🎮</div>
            <h3 className="text-2xl font-bold text-black mb-4">Gaming Community</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Level up your crypto game! Trade gaming tokens, NFTs, and metaverse assets. 
              From $AXS to $SAND, find all gaming tokens in one place with pro-level tools.
            </p>
            <div className="mb-6">
              <p className="text-xs text-gray-500 mb-2">🎯 Gaming Tokens:</p>
              <p className="text-sm font-semibold">$RONIN • $IMX • $GALA • $ENJ • $MANA</p>
            </div>
            <a
              href="https://backpack.exchange/join/lol"
              className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Gaming Hub →
            </a>
          </div>
        </div>

        <div className="bg-black text-white rounded-2xl p-12 mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why 5M+ Traders Choose Backpack</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-semibold mb-2">Lightning Speed</h4>
              <p className="text-gray-300 text-sm">Sub-millisecond execution</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="text-lg font-semibold mb-2">Fort Knox Security</h4>
              <p className="text-gray-300 text-sm">$2B+ assets protected</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-lg font-semibold mb-2">Lowest Fees</h4>
              <p className="text-gray-300 text-sm">0.02% maker fee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-gray-300 text-sm">Always here for you</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Crypto Journey?</h3>
          <p className="text-gray-600 mb-6">
            Join millions of traders who've already discovered the Backpack advantage. 
            Don't miss out on the next big opportunity!
          </p>
          <a
            href="https://backpack.exchange/join/meme"
            className="inline-block bg-black hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-full transition-colors duration-200 text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Free →
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <a href="https://backpack.exchange/join/meme" className="text-black hover:underline font-semibold">
              Sign in to Backpack
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
