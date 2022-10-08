import React from "react";
import refSvg from "../../assets/illustrations/oc-growing.svg";
import balSvg from "../../assets/illustrations/oc-add-card.svg";
import bounsSvg from "../../assets/illustrations/oc-money-profits.svg";
import { isAuth } from "../../helpers/auth";

const Card = ({ type, page }) => {
  return (
    <div
      class={
        page === "affilate"
          ? "col-sm-6 col-md-4 col-lg-4 mb-3 mb-lg-5"
          : "col-sm-6 col-xl-6 mb-3 mb-xl-5"
      }
    >
      <a class="card card-hover-shadow h-100" href="#">
        <div class="card-body text-center">
          {type === "ref" && (
            <img
              class={
                page === "affilate"
                  ? "avatar  avatar-4x3 "
                  : "avatar avatar-xl avatar-4x3 mb-4"
              }
              src={refSvg}
              alt=""
              data-hs-theme-appearance="default"
              style={{ minHeight: "6rem" }}
            />
          )}
          {type === "bal" && (
            <img
              class={
                page === "affilate"
                  ? "avatar avatar-4x3 "
                  : "avatar avatar-xl avatar-4x3 mb-4"
              }
              src={balSvg}
              alt=""
              data-hs-theme-appearance="default"
              style={{ minHeight: "6rem" }}
            />
          )}
          {type === "bouns" && (
            <img
              class={
                page === "affilate"
                  ? "avatar  avatar-4x3"
                  : "avatar avatar-xl avatar-4x3 mb-4"
              }
              src={bounsSvg}
              alt=""
              data-hs-theme-appearance="default"
              style={{ minHeight: "6rem" }}
            />
          )}
          {type === "ref" && (
            <span class="text-cap text-body">Total Referrals</span>
          )}
          {type === "bal" && (
            <span class="text-cap text-body">Your Balance</span>
          )}
          {type === "bouns" && (
            <span class="text-cap text-body">Affilate Bouns</span>
          )}
          {type === "ref" && (
            <span
              class={
                page === "affilate"
                  ? "d-block display-6 text-dark mb-2"
                  : "d-block display-4 text-dark mb-2"
              }
            >
              {isAuth().refferals.length}
            </span>
          )}
          {type === "bal" && (
            <span
              class={
                page === "affilate"
                  ? "d-block display-6 text-dark mb-2"
                  : "d-block display-4 text-dark mb-2"
              }
            >
              NGN{isAuth().wallet.currBal.toLocaleString()}
            </span>
          )}
          {type === "bouns" && (
            <span
              class={
                page === "affilate"
                  ? "d-block display-6 text-dark mb-2"
                  : "d-block display-4 text-dark mb-2"
              }
            >
              NGN{isAuth().wallet.refBouns.toLocaleString()}
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

export default Card;
