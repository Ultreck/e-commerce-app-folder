import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBluetoothB } from "react-icons/fa";
import { GrMicrophone } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { CiCamera } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import { FaLock } from "react-icons/fa";

const AccountPermission = () => {
  return (
    <div>
      <div className="flex py-2 my-5">
        <div className="text w-10 h-10 flex justify-center items-center mr-1 rounded-full bg-[#23941A]/10">
          <FaLock size={20} className="text-[#23941A]" />
        </div>
        <div className="text">
          <p className="text-[#23941A] font-semibold text-lg">
          Shoplicity DOES NOT obtain your permissions on the browser
          </p>
          <p className="text-sm text-gray-500 ">
         we only collect your personal information In the course of providing and improving our products and services.
          </p>
        </div>
      </div>
      <div className="text gap-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="text">
          <div className="text flex p-3 items-center border justify-between">
            <div className="text flex items-center gap-2 ">
              <FaRegUserCircle size={24} />
              <span className="text-sm font-semibold">Contacts</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text"></div>
        </div>
        <div className="text">
          <div className="text flex p-3 items-center border justify-between">
            <div className="text flex items-center gap-2 ">
              <FaBluetoothB size={24} />
              <span className="text-sm font-semibold">Bluetooth</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text"></div>
        </div>
        <div className="text border">
          <div className="text flex p-3 items-center justify-between">
            <div className="text flex items-center gap-2 ">
              <GrMicrophone size={24} />
              <span className="text-sm font-semibold">Microphone</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text-sm text-gray-500 p-3">
            {`Shoplicity doesn't ask to use your browser's microphone. Even though
            the browser could ask for permission to use your microphone in some
            circumstances, such as when you leave a video review, etc.
            Shoplicity will only record videos using the microphone rights you
            give the Chrome browser.`}
          </div>
        </div>
        <div className="text border">
          <div className="text flex p-3 items-center justify-between">
            <div className="text flex items-center gap-2 ">
              <IoLocationOutline size={24} />
              <span className="text-sm font-semibold">Location</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text-sm text-gray-500 p-3">
            {`Shoplicity doesn't ask for your browser's location in the majority
            of nations and regions, including Nigeria, the US, the UK, and
            others. The browser may ask for your location permissions if you are
            a Middle Eastern user. To help users enter their delivery address
            accurately, Shoplicity will only use the location permissions you
            give the Chrome browser.`}
          </div>
        </div>
        <div className="text border">
          <div className="text flex p-3 items-center justify-between">
            <div className="text flex items-center gap-2 ">
              <HiOutlinePhoto size={24} />
              <span className="text-sm font-semibold">Photos</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text-sm text-gray-500 p-3">
           {` Shoplicity doesn't ask the browser for access to your pictures.
            Shoplicity will only use the photo permissions you give the Chrome
            browser to submit photographs, even when the browser might ask for
            access to your photo permissions in other contexts, such as when
            you're reviewing something or searching for something.`}
          </div>
        </div>
        <div className="text border">
          <div className="text flex p-3 items-center justify-between">
            <div className="text flex items-center gap-2 ">
              <CiCamera size={24} />
              <span className="text-sm font-semibold">Camera</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text-sm text-gray-500 p-3">
           {` Shoplicity doesn't ask for authorization to use your browser's
            camera. Shoplicity will only utilize the camera rights you provide
            the Chrome browser to capture pictures, even if we use the camera to
            search for things, leave reviews, etc.`}
          </div>
        </div>
        <div className="text border">
          <div className="text flex p-3 items-center justify-between">
            <div className="text flex items-center gap-2 ">
              <span className="text-sm font-semibold">... Others</span>
            </div>
            <div className="text">
              <FcCancel size={24} />
            </div>
          </div>
          <div className="text-sm text-gray-500 p-3">
           {` Shoplicity won't ask for access to any additional device
            capabilities, such your calendar or reminders, in addition to the
            ones listed above.`}
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-xs mt-8">
        {`Shoplicity is a proponent of openness and asking for as little
        permissions as possible. The data policy also provides information on
        how we handle information that does not need obtaining consent or
        personal data, so you may read more about how we work to preserve our
        users' privacy.`}
      </div>
    </div>
  );
};

export default AccountPermission;
