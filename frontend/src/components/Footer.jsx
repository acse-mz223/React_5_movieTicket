import React from 'react'
function Footer() {
  return (
    <footer className="pt-8 w-full text-gray-500">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row justify-between w-full gap-10 border-b border-t border-gray-500/30 pb-6 pt-6">
          <div className="md:max-w-96">
              <img src='./donuts-white.svg' className='size-10'/>
              <p className="mt-6 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
          </div>
          <div className="flex-1 flex items-start md:justify-end gap-20">
              <div>
                  <h2 className="font-semibold mb-5 text-white">Company</h2>
                  <ul className="text-sm space-y-2">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Privacy policy</a></li>
                  </ul>
              </div>
              <div>
                  <h2 className="font-semibold mb-5 text-white">Get in touch</h2>
                  <div className="text-sm space-y-2">
                      <p>+44 0782 707 3010</p>
                      <p>moyuzhang_ustb@126.com</p>
                  </div>
              </div>
          </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
          Copyright 2024 © <a href="https://prebuiltui.com">Mo</a>. All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer