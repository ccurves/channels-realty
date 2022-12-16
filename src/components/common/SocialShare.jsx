import React from "react";
import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  InstapaperIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const SocialShare = ({ link }) => {
  const shareMsg = `I ♥ Channels Realty, Join now. Here's the link, ${link} #Chanerators`;
  return (
    <>
      <div class="col-sm-auto mt-3">
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <FacebookShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon text-white bg-secondary"
            >
              <i class="bi-facebook fs-4"></i>
            </FacebookShareButton>
          </li>

          <li class="list-inline-item">
            <TwitterShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon text-white bg-secondary"
            >
              <i class="bi-twitter fs-4"></i>
            </TwitterShareButton>
          </li>

          <li class="list-inline-item">
            <WhatsappShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon text-white bg-secondary"
            >
              <i className="bi-whatsapp fs-4"></i>
            </WhatsappShareButton>
          </li>

          <li class="list-inline-item">
            <InstapaperShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon text-white bg-secondary"
            >
              <i className="bi-instagram fs-4"></i>
            </InstapaperShareButton>
          </li>

          <li class="list-inline-item">
            <TelegramShareButton
              url={`${shareMsg}`}
              className="btn btn-md btn-icon text-white bg-secondary"
            >
              <i className="bi-telegram fs-4"></i>
            </TelegramShareButton>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialShare;
