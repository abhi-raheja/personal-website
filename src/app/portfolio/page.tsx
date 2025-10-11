'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Quick Summary');

  const tabs = [
    { name: 'Quick Summary', count: null },
    { name: 'Professional Experience', count: null },
    { name: 'Passion Projects', count: null },  
    { name: 'My Tools', count: null },
    { name: 'Who Am I Really', count: null },
    { name: 'Links', count: null }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Quick Summary':
        return (
          <div className="space-y-6">
            {/* Quick Summary Content */}
            <div className="space-y-4">
              <p className="text-gray-700 font-normal leading-relaxed">
                Over the past 8 years, I've led product, ops, and GTM teams, developed product and brand narratives, built PR and marketing functions from the ground up, launched and scaled new, cross-functional initiatives for a range of breakout web2 and web3 teams across the globe.
              </p>
              
              <p className="text-gray-700 font-normal leading-relaxed">
                I'm a former founder, and a curious, adaptable operator with an impact-driven mindset and crypto-native experience in multiplying founders' impact within their teams.
              </p>
              
              <p className="text-gray-700 font-normal leading-relaxed">
                As a right-hand operative, and a trusted soundboard for founders, my work has directly contributed to:
              </p>
              
              <ul className="space-y-3 ml-4">
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">📱</span>
                  <span>Building products and communities engaging over 100 million+ users worldwide.</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">✌️</span>
                  <span>Scaling teams from 1 to 40+</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">🚢</span>
                  <span>Building resilient PR, marketing, and communications functions for clients ranging Caldera, Cyber, Thompson Reuters, Accenture, Amazon's Audible etc.</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">🤑</span>
                  <span>Helping founders raise over $40M in funding</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="mr-3 mt-1">🚀</span>
                  <span>Leading brand, product and feature GTM, combining efforts that touch upon several business functions.</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-base font-medium text-black mb-3 flex items-center">
                  <span className="mr-2">☝️</span>
                  Oh, and also
                </h3>
                <p className="text-gray-700 font-normal leading-relaxed">
                  Life wasn't always so awesome. When I couldn't afford to pursue an education as a 17-year old in a small town in north India, I raised over $100k❗for my university education (ask me about it, seriously 😎).
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'Professional Experience':
        return (
          <div className="space-y-8">
            {/* Sunscreen Experience */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img 
                      src="https://sunscreen.tech/favicon.ico" 
                      alt="Sunscreen logo" 
                      className="w-6 h-6 mr-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-1 flex items-center">
                        <a href="https://sunscreen.tech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                          Sunscreen
                        </a>
                        <span className="text-gray-500 text-base font-normal ml-2">(Backed by Polychain, Coinbase, Naval Ravikant)</span>
                      </h3>
                      <p className="text-gray-600 text-sm">Privacy-focused applied cryptography lab</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">COO</p>
                    <p className="text-sm text-gray-600">2025</p>
                  </div>
                </div>
              </div>
              
              {/* Key Accomplishments */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Key Accomplishments</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Partner and sounding board to Founder and CEO</p>
                      <p className="text-xs text-gray-600">Responsible for rallying the company behind a shared vision, and crafting measurable GTM strategies to bring Sunscreen's deeptech breakthroughs to market</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Built Sales and Marketing function from ground up</p>
                      <p className="text-xs text-gray-600">CRM, Marketing Calendar, Social and Brand identity implementation; preparing CEO for Series A fundraise</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Leading investor relations and company-wide OKRs</p>
                      <p className="text-xs text-gray-600">Implementing measurable goals and key results across the organization while managing investor communications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caldera Experience */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img 
                      src="https://pbs.twimg.com/profile_images/1735396055812608000/tZ8QFXNl_400x400.jpg" 
                      alt="Caldera logo" 
                      className="w-6 h-6 mr-3 rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-1 flex items-center">
                        <a href="https://caldera.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                          Caldera
                        </a>
                        <span className="text-gray-500 text-base font-normal ml-2">(Backed by Founders Fund, Sequoia, Dragonfly)</span>
                      </h3>
                      <p className="text-gray-600 text-sm">Rollups-as-a-Service</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">CMO</p>
                    <p className="text-sm text-gray-600">2024 - 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Key Accomplishments */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Key Accomplishments</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Built marketing and growth function from ground up</p>
                      <p className="text-xs text-gray-600">Led social strategy: 20k → 350k X Followers, 0 → 100k Telegram Members, 50k → 250k Discord Members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Led PR and media relations for Series A</p>
                      <p className="text-xs text-gray-600">1.5M social media impressions, coverage in 10+ publications including CoinTelegraph and Blockworks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Led product GTM for initiatives engaging 7M unique wallets</p>
                      <p className="text-xs text-gray-600">Vulcan, Trackmyyield (ApeChain), Meet the Metalayer; company blog growth: 2k → 30k monthly visitors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Immersive events and thought leadership</p>
                      <p className="text-xs text-gray-600">Directly engaged 10k+ people across 2 events; worked with 10+ industry leaders for podcasts and interviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyber Experience */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img 
                      src="https://cyber.co/favicon.ico" 
                      alt="Cyber logo" 
                      className="w-6 h-6 mr-3"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-1 flex items-center">
                        <a href="https://cyber.co" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                          Cyber
                        </a>
                        <span className="text-gray-500 text-base font-normal ml-2">(Backed by Multicoin, Animoca, Delphi)</span>
                      </h3>
                      <p className="text-gray-600 text-sm">The L2 for Social</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">CMO</p>
                    <p className="text-sm text-gray-600">2022 - 2024</p>
                  </div>
                </div>
              </div>
              
              {/* Key Accomplishments */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Key Accomplishments</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Built marketing and growth function from ground up</p>
                      <p className="text-xs text-gray-600">Led GTM for Link3.to, CyberConnect, and CyberWallet: 0→940k Monthly Visitors, 0→1.6M user profiles, 0→300k MAW</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Led Connected 2023 Web3 social hackathon</p>
                      <p className="text-xs text-gray-600">2000+ applications, 70+ project submissions, $50,000+ in awards; grew Cyberletter from 1,500 to 50,000+ subscribers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Ecosystem growth and developer onboarding</p>
                      <p className="text-xs text-gray-600">Resulted in 30+ teams building on CyberConnect protocol; launched $500k Cyber Grants program for Web3 social R&D</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Content strategy and $CYBER token launch communications</p>
                      <p className="text-xs text-gray-600">0→750k social media following; lead writer on whitepaper and investor updates; global events strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goodable Experience */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img 
                      src="https://pbs.twimg.com/profile_images/1077252616104706048/wqiNHqPf_400x400.jpg" 
                      alt="Goodable logo" 
                      className="w-6 h-6 mr-3 rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-1 flex items-center">
                        <a href="https://goodable.co" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                          Goodable
                        </a>
                        <span className="text-gray-500 text-base font-normal ml-2">(Backed by Techstars, Foundry Group)</span>
                      </h3>
                      <p className="text-gray-600 text-sm">Positive news and stories</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Co-founder</p>
                    <p className="text-sm text-gray-600">2018 - 2021</p>
                  </div>
                </div>
              </div>
              
              {/* Key Accomplishments */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Key Accomplishments</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Raised $2M across two funding rounds</p>
                      <p className="text-xs text-gray-600">Conceptualized and directed enterprise revenue model among several other key revenue-generating verticals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Led marketing campaigns reaching 40+ million users worldwide</p>
                      <p className="text-xs text-gray-600">Managed audience engagement and communication strategies across global markets</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Developed operational rhythm of business functions</p>
                      <p className="text-xs text-gray-600">Including biz dev, hiring, people ops, fundraising and investor relations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Built enterprise revenue model for therapist network</p>
                      <p className="text-xs text-gray-600">Led strategic cross-functional initiatives for professional therapists platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Antica Productions Experience */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">🎙</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-1 flex items-center">
                        <a href="http://www.anticaproductions.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors underline underline-offset-4">
                          Antica Productions
                        </a>
                        <span className="text-gray-500 text-base font-normal ml-2">(Audio Production Company)</span>
                      </h3>
                      <p className="text-gray-600 text-sm">Producer/Journalist - Employee #7</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">Producer/Journalist</p>
                    <p className="text-sm text-gray-600">Employee #7</p>
                  </div>
                </div>
              </div>
              
              {/* Key Accomplishments */}
              <div className="space-y-4">
                <h4 className="text-base font-semibold text-gray-900 mb-4">Key Accomplishments</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Designed podcast branding strategy for 15 shows</p>
                      <p className="text-xs text-gray-600">Top publishers including BBC, Thompson Reuters, NBC, Audible, Toronto Star</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Researcher/writer/producer on 25+ high impact programs</p>
                      <p className="text-xs text-gray-600">Reaching over 1 million people worldwide; documented legal battles, cults in Florida, Malcolm Gladwell's Outliers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Developed company portfolio website and social media</p>
                      <p className="text-xs text-gray-600">Increased traffic and engagement by over 350% within 12 months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Passion Projects':
        return (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <p className="text-lg font-medium mb-2">Passion Projects</p>
              <p className="text-sm">Side projects and creative endeavors will appear here</p>
            </div>
          </div>
        );

      case 'My Tools':
        return (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-medium mb-2">My Tools</p>
              <p className="text-sm">Tech stack and tools I use will appear here</p>
            </div>
          </div>
        );

      case 'Who Am I Really':
        return (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-lg font-medium mb-2">Who Am I Really?</p>
              <p className="text-sm">Personal stories and deeper insights will appear here</p>
            </div>
          </div>
        );

      case 'Links':
        return (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <p className="text-lg font-medium mb-2">Links</p>
              <p className="text-sm">Important links and resources will appear here</p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <p className="text-lg font-medium mb-2">Coming soon</p>
              <p className="text-sm">This section is under development</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Navigation matching main site */}
      <nav className="w-full py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Back Button */}
            <Link 
              href="/" 
              className="flex items-center text-gray-700 hover:text-black transition-colors font-normal"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/writings" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Writings
              </Link>
              <Link 
                href="/reading" 
                className="text-gray-700 hover:text-black transition-colors font-normal"
              >
                Reading
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content" className="px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* X.com Style Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Cover Image */}
            <div className="relative w-full h-48 md:h-60 bg-gray-200 rounded-t-2xl overflow-hidden">
              <img 
                src="/portfolio-cover.jpg" 
                alt="Abhi Raheja presenting to an audience" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-gray-600"><div class="text-center"><svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg><p class="text-sm">Cover Image</p></div></div>';
                  }
                }}
              />
            </div>
            
            {/* Profile Info Section */}
            <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 px-6 pb-6">
              {/* Profile Photo - Overlapping the cover */}
              <div className="relative -mt-16 mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-lg">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Abhi Raheja" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">AR</div>';
                      }
                    }}
                  />
                </div>
                
                {/* Open to New Roles Button - Positioned absolutely */}
                <div className="absolute top-0 right-0">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 border border-green-200 rounded-full text-green-700 font-medium text-sm transition-colors">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open to New Roles
                  </button>
                </div>
              </div>
              
              {/* Name and Handle */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-black">Abhi Raheja</h1>
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  
                  {/* Social Icons on the right side */}
                  <div className="flex items-center space-x-3">
                    <a 
                      href="https://x.com/abhihereandnow" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                      aria-label="X (Twitter)"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/abhiraheja" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="https://github.com/abhi-raheja" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="mailto:a@earlyasaservice.com" 
                      className="text-gray-600 hover:text-black transition-colors"
                      aria-label="Email"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-gray-500 text-base mb-3">@abhihereandnow (abhir.eth)</p>
                
                {/* Location, Website, and Bitcoin line */}
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>Montreal, QC</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                    </svg>
                    <a href="https://abhiraheja.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">abhiraheja.com</a>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Bought BTC in 2017, Full-Time in crypto Since 2020</span>
                  </div>
                </div>
              </div>
              
              {/* Bio */}
              <div className="mb-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-3">
                  <p className="text-blue-800 font-medium text-base leading-relaxed">
                    🔨 CMO & GTM Lead | Force Multiplier for Mission-Driven Founders
                  </p>
                </div>
                
                {/* Two-column layout for Roles and second box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Roles Box */}
                  <div>
                    <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-2xl">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">Roles</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <div className="text-gray-800 font-medium text-sm leading-relaxed">
                            Currently CMO & COO <a href="https://www.sunscreen.tech" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@sunscreentech</a> (backed by Polychain)
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                          </svg>
                          <div className="text-gray-800 font-medium text-sm leading-relaxed">
                            <div className="mb-2">Formerly,</div>
                            <div className="space-y-1">
                              <div>CMO <a href="https://caldera.xyz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@calderaxyz</a> (backed by Founders Fund)</div>
                              <div>CMO <a href="https://cyber.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@buildoncyber</a> (backed by Multicoin)</div>
                              <div>Cofounder <a href="https://x.com/ariinaxyz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@ariinaxyz</a> <a href="https://goodable.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@goodable</a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Box */}
                  <div>
                    <div className="px-5 py-4 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-2xl h-full relative">
                      <h3 className="text-sm font-semibold text-gray-700 mb-4">Personal</h3>
                      
                      {/* Empty for now */}
                      <div className="text-gray-500 text-sm">
                        Coming soon...
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* X.com Style Tabs */}
              <div className="border-t border-gray-100 mt-6">
                <div className="flex relative">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 ease-in-out relative group ${
                        activeTab === tab.name
                          ? 'text-black transform scale-105'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-1 relative z-10">
                        {tab.name}
                        {tab.count && (
                          <span className="text-xs text-gray-400">
                            {tab.count}
                          </span>
                        )}
                      </span>
                      
                      {/* Active tab indicator with animation */}
                      {activeTab === tab.name && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30
                          }}
                        />
                      )}
                      
                      {/* Hover effect background */}
                      {activeTab !== tab.name && (
                        <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-t-lg" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content with fade animation */}
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pt-6"
              >
                {renderTabContent()}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </main>
      
      {/* Footer */}
      <footer className="px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Abhi Raheja
          </p>
        </div>
      </footer>
    </div>
  );
}
