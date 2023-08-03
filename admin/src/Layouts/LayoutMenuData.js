import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BiCommentEdit } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { RiLinksFill } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
const Navdata = () => {
  const history = useHistory();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isAuthentications, setAuthentications] = useState(false);
  const [course, setIsCourse] = useState(false)
  const [isUsers, setIsUsers] = useState(false);
  const [isFAQs, setIsFAQs] = useState(false);
  const [isSchemas, setIsSchemas] = useState(false);
  const [isTaxonomy, setIsTaxonomy] = useState(false);
  const [isRoles, setIsRoles] = useState(false);
  const [isCates, setisCates] = useState(false);
  const [isPosts, setIsPosts] = useState(false);
  const [isLinks, setIsLinks] = useState(false);
  const [isMedia, setIsMedia] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isBanners, setIsBanners] = useState(false);
  const [isStatistics, setIsStatistics] = useState(false);
  const [isDomains, setIsDomains] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");
  const [isAutoLink, setIsAutoLink] = useState(false);
  const [isFP, setIsFP] = useState(false);
  const [isBlacklist, setIsBlackList] = useState(false);
  const [isWhitelist, setIsWhitelist] = useState(false);
  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }
  //
  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Users") {
      setIsUsers(false);
    }
    if (iscurrentState !== "FAQs") {
      setIsFAQs(false);
    }
    if (iscurrentState !== "Schemas") {
      setIsSchemas(false);
    }
    if (iscurrentState !== "Taxonomy") {
      setIsTaxonomy(false);
    }
    if (iscurrentState !== "Categorys") {
      setisCates(false);
    }
    if (iscurrentState !== "Posts") {
      setIsPosts(false);
    }
    if (iscurrentState !== "Links") {
      setIsLinks(false);
    }
    if (iscurrentState !== "Media") {
      setIsMedia(false);
    }
    if (iscurrentState !== "Banners") {
      setIsBanners(false);
    }
    if (iscurrentState !== "Statistics") {
      setIsStatistics(false);
    }
    if (iscurrentState !== "Redirects") {
      setIsRedirect(false);
    }
    if (iscurrentState !== "Autolinks") {
      setIsAutoLink(false);
    }
    if (iscurrentState !== "Domains") {
      setIsDomains(false);
    }
    if (iscurrentState !== "FP") {
      setIsFP(false);
    }
    if (iscurrentState !== "Blacklist") {
      setIsBlackList(false);
    }
    if (iscurrentState !== "Whitelist") {
      setIsWhitelist(false);
    }

    if (iscurrentState !== "Course") {
      setIsCourse(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isUsers,
    isFAQs,
    isSchemas,
    isTaxonomy,
    isCates,
    isLinks,
    isMedia,
    isBanners,
    isStatistics,
    isRedirect,
    isAutoLink,
    isDomains,
    isBlacklist,
    isWhitelist,
    course
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "authentications",
      label: "QUẢN LÝ NGƯỜI DÙNG",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isAuthentications,
      click: function (e) {
        e.preventDefault();
        setAuthentications(!isAuthentications);
        setIscurrentState("Authentications");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "users",
          label: "Tài khoản",
          link: "/users",
          parentId: "user",
        },
        {
          id: "roles",
          label: "Quyền",
          link: "/roles",
          parentId: "role",
        },
        {
          id: "actions",
          label: "Thao tác",
          link: "/actions",
          parentId: "action",
        },

        {
          id: "roleActions",
          label: "Phân quyền thao tác",
          link: "/roleActions",
          parentId: "roleAction",
        },
      ],
    },
    // {
    //   id: "dashboard",
    //   label: "BẢNG ĐIỀU KHIỂN SADSA",
    //   icon: "ri-dashboard-2-line",
    //   link: "/#",
    //   stateVariables: isDashboard,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsDashboard(!isDashboard);
    //     setIscurrentState("Dashboard");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     // {
    //     //   id: "analytics",
    //     //   label: "Analytics",
    //     //   link: "/dashboard-analytics",
    //     //   parentId: "dashboard",
    //     // },
    //   ],
    // },
    // {
    //   id: "users",
    //   label: "QUẢN LÝ THÀNH VIÊN",
    //   icon: "ri-user-2-line",
    //   link: "/#",
    //   stateVariables: isUsers,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsUsers(!isUsers);
    //     setIscurrentState("Users");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "user-management",
    //       label: "Thành Viên",
    //       link: "/users",
    //       parentId: "users",
    //     },
    //     // {
    //     //   id: "user-permission",
    //     //   label: "Phân Quyền",
    //     //   link: "/permission",
    //     //   parentId: "users",
    //     // },
    //   ],
    // },
    // {
    //   id: "fp",
    //   label: "QUẢN LÝ FP",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: isFP,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsFP(!isFP);
    //     setIscurrentState("FP");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "fp-management",
    //       label: "FP",
    //       link: "/fp",
    //       parentId: "fp",
    //     },
    //   ],
    // },
    {
      id: "news-management",
      label: "QUẢN LÝ",
      icon: "ri-bookmark-line",
      link: "/#",
      stateVariables: isSchemas,
      click: function (e) {
        e.preventDefault();
        setIsSchemas(!isSchemas);
        setIscurrentState("Schemas");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "news",
          label: "Sh-bet",
          link: "/sh-bet",
          parentId: "news-management",
        },
        {
          id: "F8Bet",
          label: "F8Bet",
          link: "/f8-bet",
          parentId: "news-management",
        },
        {
          id: "Jun88",
          label: "Jun88",
          link: "/jun88",
          parentId: "news-management",
        },
        {
          id: "789Bet",
          label: "789Bet",
          link: "/789bet",
          parentId: "news-management",
        },
        {
          id: "jun41",
          label: "Jun41",
          link: "/jun41",
          parentId: "news-management",
        },
        {
          id: "New88",
          label: "New88",
          link: "/new88",
          parentId: "news-management",
        },
      ],
      
    },
    // {
    //   id: "roles",
    //   label: "QUẢN LÍ PHÂN QUYỀN",
    //   icon: "ri-user-2-line",
    //   link: "/#",
    //   stateVariables: isRoles,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsRoles(!isRoles);
    //     setIscurrentState("Roles");
    //   },
    //   subItems: [
    //     {
    //       id: "roles-management",
    //       label: "QUYỀN HẠN",
    //       link: "/roles",
    //       parentId: "roles",
    //     },
    //   ],
    // },
    // {
    //   id: "taxonomy-management",
    //   label: "CHUYÊN MỤC",
    //   icon: "ri-price-tag-3-line",
    //   link: "/#",
    //   stateVariables: isTaxonomy,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsTaxonomy(!isTaxonomy);
    //     setIscurrentState("Taxonomy");
    //   },
    //   subItems: [
    //     {
    //       id: "taxonomy",
    //       label: "Danh mục",
    //       link: "/categories",
    //       parentId: "taxonomy-management",
    //     },
       
    //   ],
    // },
    // {
    //   id: "post-management",
    //   label: "QUẢN LÝ BÀI VIẾT",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: isPosts,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsPosts(!isPosts);
    //     setIscurrentState("Posts");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "posts",
    //       label: "Bài Viết",
    //       link: "/posts",
    //       parentId: "post-management",
    //     },
        
    //   ],
    // },
   
    // {
    //   id: "banner-management",
    //   label: "QUẢN LÝ BANNER",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: isBanners,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsBanners(!isBanners);
    //     setIscurrentState("Banners");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "banners",
    //       label: "Banner",
    //       link: "/manage-banner",
    //       parentId: "banner-management",
    //     },
        
    //   ],
    // },
    // {
    //   id: "course-management",
    //   label: "QUẢN LÝ KHÓA HỌC",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: course,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsCourse(!course);
    //     setIscurrentState("Course");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "course",
    //       label: "Khóa học",
    //       link: "/course",
    //       parentId: "course-management",
    //     },
    //     {
    //       id: "lesson",
    //       label: "Bài học",
    //       link: "/lesson",
    //       parentId: "lesson-management",
    //     },
    //   ],
    // },

    // {
    //   id: "domain-management",
    //   label: "QUẢN LÝ DOMAINS",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: isDomains,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsDomains(!isDomains);
    //     setIscurrentState("Domains");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "domains",
    //       label: "Quản lý Domains",
    //       link: "/domains",
    //       parentId: "domains-management",
    //     },
    //   ],
    // },
    // {
    //   id: "whitelist-management",
    //   label: "QUẢN LÝ WHITELIST",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: isWhitelist,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsWhitelist(!isWhitelist);
    //     setIscurrentState("Whitelist");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "whitelist",
    //       label: "Quản lý whitelist",
    //       link: "/whitelist",
    //       parentId: "whitelist-management",
    //     },
    //   ],
    // },
    // {
    //   id: "blacklist-management",
    //   label: "QUẢN LÝ BLACKLIST",
    //   icon: "ri-archive-line",
    //   link: "/#",
    //   stateVariables: isBlacklist,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsBlackList(!isBlacklist);
    //     setIscurrentState("Blacklist");
    //     updateIconSidebar(e);
    //   },
    //   subItems: [
    //     {
    //       id: "blacklist",
    //       label: "Quản lý blacklist",
    //       link: "/blacklist",
    //       parentId: "blacklist-management",
    //     },
    //   ],
    // },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
