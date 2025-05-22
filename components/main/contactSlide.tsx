'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, Phone, MapPin, MessageSquare } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function ContactSlideIn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <div className="flex justify-center items-center h-60">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg hover:scale-105 transition"
        >
          Contact Me
        </button>
      </div>

      {/* Slide-in Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="ease-in duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 flex justify-end">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-full max-w-md bg-[#0d0c1d] border-l border-purple-600 shadow-[0_0_25px_#7042f8] p-6 text-white space-y-6">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <Dialog.Title className="text-xl font-bold text-purple-400">
                     
                      <br />
                      <span className="text-sm text-gray-300">Reach out to me!</span>
                    </Dialog.Title>
                    <button onClick={() => setIsOpen(false)}>
                      <X className="text-gray-300 hover:text-red-500 transition" />
                    </button>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 text-cyan-300">
                      <MessageSquare size={20} />
                      <a
                        href="https://wa.me/2348136005505"
                        className="hover:text-green-300 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +234 813 600 5505
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-pink-400">
                      <Phone size={20} />
                      <span>+234 812 816 2907</span>
                    </div>

                    <div className="flex items-center gap-3 text-purple-400">
                      <MapPin size={20} />
                      <span>Portharcourt City, Nigeria</span>
                    </div>

                    {/* QR Code */}
                    <div className="text-center mt-6">
                      <img
                        src="/qr.png"
                        alt="WhatsApp QR"
                        className="w-40 h-40 mx-auto border border-cyan-500 rounded-xl shadow-[0_0_20px_cyan]"
                      />
                      <p className="text-xs text-cyan-300 mt-2">Scan to connect via WhatsApp</p>
                    </div>
    <br />
    <br />
                    {/* Socials */}
                    <div className="flex justify-center space-x-6 mt-8">
                      <a
                        href="https://facebook.com/IamRexisle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition"
                      >
                        <FaFacebookF size={20} />
                      </a>
                      <a
                        href="https://instagram.com/rex_isle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400 transition"
                      >
                        <FaInstagram size={20} />
                      </a>
                      <a
                        href="https://twitter.com/rexisle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        <FaTwitter size={20} />
                      </a>
                    </div>
                    
                  {/* Download CV */}
                  <div className="text-center mt-6">
                    <a
                    href="/cv.pdf"
                    download
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:scale-105 transition"
                    >
                    Download My CV
                    </a>
                  </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
