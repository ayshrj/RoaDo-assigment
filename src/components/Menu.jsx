import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

import IconClonify from "../assets/icons/IconClonify.svg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-icon">
        <img src={IconClonify} alt="" />
      </div>
      <div className="menu-items">
        <MenuItem
          title="D A S H B O A R D"
          subtitle={[
            {
              title: "Dashboard",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1033 9.27667C13.9603 8.46508 13.5798 7.71415 13.0099 7.11882C12.4401 6.52349 11.7065 6.1105 10.902 5.93209C10.0974 5.75368 9.25804 5.81786 8.48996 6.1165C7.72188 6.41515 7.05961 6.93485 6.5869 7.60989C6.11419 8.28492 5.85226 9.08498 5.83425 9.90887C5.81624 10.7328 6.04295 11.5435 6.48571 12.2386C6.92847 12.9336 7.56739 13.4818 8.32168 13.8137C9.07597 14.1456 9.91175 14.2464 10.7233 14.1033M2.5 10C2.5 11.4834 2.93987 12.9334 3.76398 14.1668C4.58809 15.4001 5.75943 16.3614 7.12987 16.9291C8.50032 17.4968 10.0083 17.6453 11.4632 17.3559C12.918 17.0665 14.2544 16.3522 15.3033 15.3033C16.3522 14.2544 17.0665 12.918 17.3559 11.4632C17.6453 10.0083 17.4968 8.50032 16.9291 7.12987C16.3614 5.75943 15.4001 4.58809 14.1668 3.76398C12.9334 2.93987 11.4834 2.5 10 2.5M9.16667 10C9.16667 10.221 9.25446 10.433 9.41074 10.5893C9.56702 10.7455 9.77899 10.8333 10 10.8333C10.221 10.8333 10.433 10.7455 10.5893 10.5893C10.7455 10.433 10.8333 10.221 10.8333 10C10.8333 9.77899 10.7455 9.56702 10.5893 9.41074C10.433 9.25446 10.221 9.16667 10 9.16667C9.77899 9.16667 9.56702 9.25446 9.41074 9.41074C9.25446 9.56702 9.16667 9.77899 9.16667 10Z"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              subitems: ["Analytics", "Finance", "Job Board"],
            },
            {
              title: "Messages",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.39934 5.44301C3.52954 5.01621 3.92643 4.70572 4.39583 4.70572H16.0625C16.5319 4.70572 16.9288 5.0162 17.059 5.44301L10.2292 9.99623L3.39934 5.44301ZM2.10419 5.73594C2.10408 5.74261 2.10407 5.74927 2.10417 5.75593V14.0807C2.10417 15.3464 3.13018 16.3724 4.39583 16.3724H16.0625C17.3282 16.3724 18.3542 15.3464 18.3542 14.0807V5.75586M17.1042 6.91521V14.0807C17.1042 14.656 16.6378 15.1224 16.0625 15.1224H4.39583C3.82054 15.1224 3.35417 14.656 3.35417 14.0807V6.91521L9.88248 11.2674C10.0924 11.4074 10.3659 11.4074 10.5759 11.2674L17.1042 6.91521ZM18.3541 5.73603C18.348 4.4756 17.3244 3.45572 16.0625 3.45572H4.39583C3.134 3.45572 2.11036 4.47555 2.10419 5.73594"
                    fill="#5F6980"
                  />
                </svg>
              ),
              subitems: ["Sent", "Received"],
            },
            {
              title: "Friends",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.94531 6.66698C6.94531 5.17121 8.15787 3.95865 9.65364 3.95865C11.1494 3.95865 12.362 5.17121 12.362 6.66698C12.362 8.16275 11.1494 9.37532 9.65364 9.37532C8.15787 9.37532 6.94531 8.16275 6.94531 6.66698ZM9.65364 2.70865C7.46752 2.70865 5.69531 4.48085 5.69531 6.66698C5.69531 8.85311 7.46752 10.6253 9.65364 10.6253C11.8398 10.6253 13.612 8.85311 13.612 6.66698C13.612 4.48085 11.8398 2.70865 9.65364 2.70865ZM6.0719 13.8323C6.57981 13.3244 7.26868 13.0391 7.98698 13.0391H11.3203C12.0386 13.0391 12.7275 13.3244 13.2354 13.8323C13.7433 14.3402 14.0286 15.0291 14.0286 15.7474V17.4141C14.0286 17.7592 14.3085 18.0391 14.6536 18.0391C14.9988 18.0391 15.2786 17.7592 15.2786 17.4141V15.7474C15.2786 14.6976 14.8616 13.6908 14.1193 12.9484C13.3769 12.2061 12.3701 11.7891 11.3203 11.7891H7.98698C6.93716 11.7891 5.93034 12.2061 5.18801 12.9484C4.44568 13.6908 4.02864 14.6976 4.02864 15.7474V17.4141C4.02864 17.7592 4.30847 18.0391 4.65364 18.0391C4.99882 18.0391 5.27864 17.7592 5.27864 17.4141V15.7474C5.27864 15.0291 5.56399 14.3402 6.0719 13.8323Z"
                    fill="#5F6980"
                  />
                </svg>
              ),
              subitems: ["Request Sent", "Request Received"],
            },
            {
              title: "Apps",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.18489 4.12371C4.18489 4.00865 4.27817 3.91537 4.39323 3.91537H7.72656C7.84162 3.91537 7.93489 4.00865 7.93489 4.12371V7.45704C7.93489 7.5721 7.84162 7.66537 7.72656 7.66537H4.39323C4.27817 7.66537 4.18489 7.5721 4.18489 7.45704V4.12371ZM4.39323 2.66537C3.58781 2.66537 2.93489 3.31829 2.93489 4.12371V7.45704C2.93489 8.26246 3.58781 8.91537 4.39323 8.91537H7.72656C8.53198 8.91537 9.18489 8.26246 9.18489 7.45704V4.12371C9.18489 3.31829 8.53198 2.66537 7.72656 2.66537H4.39323ZM12.5182 4.12371C12.5182 4.00865 12.6115 3.91537 12.7266 3.91537H16.0599C16.175 3.91537 16.2682 4.00865 16.2682 4.12371V7.45704C16.2682 7.5721 16.175 7.66537 16.0599 7.66537H12.7266C12.6115 7.66537 12.5182 7.5721 12.5182 7.45704V4.12371ZM12.7266 2.66537C11.9211 2.66537 11.2682 3.31829 11.2682 4.12371V7.45704C11.2682 8.26246 11.9211 8.91537 12.7266 8.91537H16.0599C16.8653 8.91537 17.5182 8.26246 17.5182 7.45704V4.12371C17.5182 3.31829 16.8653 2.66537 16.0599 2.66537H12.7266ZM4.39323 12.2487C4.27817 12.2487 4.18489 12.342 4.18489 12.457V15.7904C4.18489 15.9054 4.27817 15.9987 4.39323 15.9987H7.72656C7.84162 15.9987 7.93489 15.9054 7.93489 15.7904V12.457C7.93489 12.342 7.84162 12.2487 7.72656 12.2487H4.39323ZM2.93489 12.457C2.93489 11.6516 3.58781 10.9987 4.39323 10.9987H7.72656C8.53198 10.9987 9.18489 11.6516 9.18489 12.457V15.7904C9.18489 16.5958 8.53198 17.2487 7.72656 17.2487H4.39323C3.58781 17.2487 2.93489 16.5958 2.93489 15.7904V12.457ZM12.5182 12.457C12.5182 12.342 12.6115 12.2487 12.7266 12.2487H16.0599C16.175 12.2487 16.2682 12.342 16.2682 12.457V15.7904C16.2682 15.9054 16.175 15.9987 16.0599 15.9987H12.7266C12.6115 15.9987 12.5182 15.9054 12.5182 15.7904V12.457ZM12.7266 10.9987C11.9211 10.9987 11.2682 11.6516 11.2682 12.457V15.7904C11.2682 16.5958 11.9211 17.2487 12.7266 17.2487H16.0599C16.8653 17.2487 17.5182 16.5958 17.5182 15.7904V12.457C17.5182 11.6516 16.8653 10.9987 16.0599 10.9987H12.7266Z"
                    fill="#5F6980"
                  />
                </svg>
              ),
              subitems: ["Calendar", "Notes"],
            },
          ]}
        />
        <MenuItem
          title="P A G E S"
          subtitle={[
            {
              title: "Help Center",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 12.5L15.2917 15.2917M7.5 12.5L4.70833 15.2917M4.70833 4.70833L7.5 7.5M15.2917 4.70833L12.5 7.5M6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9821 9.11594 13.3333 10 13.3333C10.8841 13.3333 11.7319 12.9821 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10C13.3333 9.11594 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667C9.11594 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11594 6.66667 10ZM2.5 10C2.5 10.9849 2.69399 11.9602 3.0709 12.8701C3.44781 13.7801 4.00026 14.6069 4.6967 15.3033C5.39314 15.9997 6.21993 16.5522 7.12987 16.9291C8.03982 17.306 9.01509 17.5 10 17.5C10.9849 17.5 11.9602 17.306 12.8701 16.9291C13.7801 16.5522 14.6069 15.9997 15.3033 15.3033C15.9997 14.6069 16.5522 13.7801 16.9291 12.8701C17.306 11.9602 17.5 10.9849 17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10Z"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              subitems: ["Call", "Message"],
            },
            {
              title: "File Manager",
              icon: (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16667 3.33331H7.5L10 5.83331H15.8333C16.2754 5.83331 16.6993 6.00891 17.0118 6.32147C17.3244 6.63403 17.5 7.05795 17.5 7.49998V14.1666C17.5 14.6087 17.3244 15.0326 17.0118 15.3452C16.6993 15.6577 16.2754 15.8333 15.8333 15.8333H4.16667C3.72464 15.8333 3.30072 15.6577 2.98816 15.3452C2.67559 15.0326 2.5 14.6087 2.5 14.1666V4.99998C2.5 4.55795 2.67559 4.13403 2.98816 3.82147C3.30072 3.50891 3.72464 3.33331 4.16667 3.33331Z"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              subitems: ["Make Item", "Delete Item"],
            },
          ]}
        />
      </div>
      <div className="menu-user-options">
        <div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.7096 6.45799C10.7096 5.53751 11.4558 4.79132 12.3763 4.79132C13.2968 4.79132 14.043 5.53751 14.043 6.45799C14.043 7.37846 13.2968 8.12465 12.3763 8.12465C11.4558 8.12465 10.7096 7.37846 10.7096 6.45799ZM9.52676 7.08299H3.41797C3.07279 7.08299 2.79297 6.80317 2.79297 6.45799C2.79297 6.11281 3.07279 5.83299 3.41797 5.83299H9.52676C9.81287 4.52249 10.98 3.54132 12.3763 3.54132C13.7726 3.54132 14.9397 4.52249 15.2258 5.83299H18.418C18.7631 5.83299 19.043 6.11281 19.043 6.45799C19.043 6.80317 18.7631 7.08299 18.418 7.08299H15.2258C14.9397 8.39348 13.7726 9.37465 12.3763 9.37465C10.98 9.37465 9.81287 8.39348 9.52676 7.08299ZM5.70964 13.1247C5.70964 12.2042 6.45583 11.458 7.3763 11.458C8.29678 11.458 9.04297 12.2042 9.04297 13.1247C9.04297 14.0451 8.29678 14.7913 7.3763 14.7913C6.45583 14.7913 5.70964 14.0451 5.70964 13.1247ZM7.3763 16.0413C5.98 16.0413 4.81287 15.0601 4.52676 13.7497H3.41797C3.07279 13.7497 2.79297 13.4698 2.79297 13.1247C2.79297 12.7795 3.07279 12.4997 3.41797 12.4997H4.52676C4.81287 11.1892 5.98 10.208 7.3763 10.208C8.7726 10.208 9.93973 11.1892 10.2258 12.4997H18.418C18.7631 12.4997 19.043 12.7795 19.043 13.1247C19.043 13.4698 18.7631 13.7497 18.418 13.7497H10.2258C9.93973 15.0601 8.7726 16.0413 7.3763 16.0413Z"
              fill="#5F6980"
            />
          </svg>
        </div>
        <div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.14063 2.66534C4.53284 2.66534 3.94995 2.90679 3.52017 3.33656C3.0904 3.76633 2.84896 4.34922 2.84896 4.95701V14.957C2.84896 15.5648 3.0904 16.1477 3.52017 16.5775C3.94994 17.0072 4.53284 17.2487 5.14063 17.2487H10.974C11.5817 17.2487 12.1646 17.0072 12.5944 16.5775C13.0242 16.1477 13.2656 15.5648 13.2656 14.957V13.2903C13.2656 12.9452 12.9858 12.6653 12.6406 12.6653C12.2954 12.6653 12.0156 12.9452 12.0156 13.2903V14.957C12.0156 15.2333 11.9059 15.4982 11.7105 15.6936C11.5152 15.8889 11.2502 15.9987 10.974 15.9987H5.14063C4.86436 15.9987 4.59941 15.8889 4.40406 15.6936C4.20871 15.4982 4.09896 15.2333 4.09896 14.957V4.95701C4.09896 4.68074 4.20871 4.41579 4.40406 4.22044C4.59941 4.02509 4.86436 3.91534 5.14063 3.91534H10.974C11.2502 3.91534 11.5152 4.02509 11.7105 4.22044C11.9059 4.41579 12.0156 4.68074 12.0156 4.95701V6.62368C12.0156 6.96886 12.2954 7.24868 12.6406 7.24868C12.9858 7.24868 13.2656 6.96886 13.2656 6.62368V4.95701C13.2656 4.34922 13.0242 3.76633 12.5944 3.33656C12.1646 2.90679 11.5817 2.66534 10.974 2.66534H5.14063ZM16.4159 7.01507C16.1718 6.77099 15.7761 6.77099 15.532 7.01507C15.2879 7.25915 15.2879 7.65487 15.532 7.89895L16.9651 9.33201H6.80729C6.46212 9.33201 6.18229 9.61183 6.18229 9.95701C6.18229 10.3022 6.46212 10.582 6.80729 10.582H16.9651L15.532 12.0151C15.2879 12.2591 15.2879 12.6549 15.532 12.899C15.7761 13.143 16.1718 13.143 16.4159 12.899L18.9126 10.4022C18.9246 10.3904 18.9362 10.378 18.9473 10.3652C19.03 10.2695 19.0789 10.1547 19.0939 10.0363C19.099 9.99645 19.1002 9.95638 19.0977 9.91666C19.0883 9.77041 19.0277 9.62684 18.9159 9.51507L16.4159 7.01507Z"
              fill="#5F6980"
            />
          </svg>
        </div>
        <div>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.918 2.03101C10.8055 2.03101 10.6935 2.03334 10.5822 2.03795C10.5112 2.02551 10.4387 2.0298 10.3706 2.04951C6.22474 2.33077 2.94897 5.78284 2.94897 10C2.94897 14.2172 6.22474 17.6692 10.3706 17.9505C10.4387 17.9702 10.5112 17.9745 10.5822 17.9621C10.6935 17.9667 10.8055 17.969 10.918 17.969C11.0304 17.969 11.1423 17.9667 11.2535 17.9621C11.3245 17.9745 11.3969 17.9702 11.465 17.9505C15.611 17.6694 18.887 14.2173 18.887 10C18.887 5.78272 15.611 2.33057 11.465 2.04949C11.3969 2.0298 11.3245 2.02552 11.2535 2.03795C11.1423 2.03334 11.0304 2.03101 10.918 2.03101ZM11.0726 2.97067C11.0212 2.96956 10.9697 2.969 10.918 2.969C10.8662 2.969 10.8146 2.96956 10.763 2.97067C9.99862 4.24888 9.45997 5.62086 9.14708 7.03123H12.6886C12.3757 5.62086 11.837 4.24888 11.0726 2.97067ZM12.8626 7.96922H8.97303C8.77145 9.31543 8.77147 10.685 8.9731 12.0312H12.8626C13.0642 10.685 13.0642 9.31543 12.8626 7.96922ZM13.8104 12.0312C13.9989 10.684 13.9989 9.31641 13.8104 7.96922H17.6512C17.8449 8.61217 17.949 9.29393 17.949 10C17.949 10.7062 17.8449 11.3881 17.6511 12.0312H13.8104ZM12.6885 12.9692H9.14718C9.46008 14.3794 9.9987 15.7513 10.763 17.0293C10.8145 17.0304 10.8662 17.031 10.918 17.031C10.9697 17.031 11.0212 17.0304 11.0726 17.0293C11.837 15.7513 12.3756 14.3794 12.6885 12.9692ZM12.2174 16.9112C12.8896 15.657 13.3664 14.3287 13.6478 12.9692H17.2931C16.3499 14.991 14.4732 16.4897 12.2174 16.9112ZM13.6479 7.03123C13.3665 5.67164 12.8896 4.34312 12.2174 3.08883C14.4734 3.51036 16.3501 5.00926 17.2933 7.03123H13.6479ZM9.61826 16.9111C8.94608 15.657 8.46928 14.3286 8.18787 12.9692H4.54283C5.48602 14.9909 7.36254 16.4895 9.61826 16.9111ZM8.02531 12.0312C7.83674 10.684 7.83672 9.31641 8.02525 7.96922H4.18469C3.99104 8.61217 3.88697 9.29393 3.88697 10C3.88697 10.7062 3.99109 11.3881 4.18483 12.0312H8.02531ZM8.18778 7.03123C8.46918 5.67166 8.94601 4.34316 9.61826 3.08889C7.36237 3.5105 5.48575 5.00936 4.54263 7.03123H8.18778Z"
              fill="#5F6980"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Menu;
