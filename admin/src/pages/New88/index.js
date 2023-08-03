import { Col, Row, Spin } from "antd";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { useEffect, useState } from "react";
import "./New88.scss"
import LogoNew88 from "../../Components/New88/logoNew88";

const New88 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fClickedAlready, setFClickedAlready] = useState(false);

  useEffect(() => {
    function isMobile() {
      var isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test(
        navigator.userAgent.toLowerCase()
      );
      return isMobile;
    }

    if (!isMobile()) {
      document.querySelectorAll('.wrap-infohelp_social-item').forEach((ele) => {
        ele.addEventListener('mouseover', (e) => {
          const el = e.target.querySelector('.wrap-infohelp_social-item_hover');
          el.classList.add('in-wipe-down');
          el.classList.remove('out-wipe-up');
          el.style.display = 'block';
          e.target.querySelector('.wrap-infohelp_social-item_current').style.opacity = 0;
        });
        ele.addEventListener('mouseleave', (e) => {
          const el = e.target.querySelector('.wrap-infohelp_social-item_hover');
          el.style.display = 'none';
          el.style.display = 'block';
          el.classList.remove('in-wipe-down');
          el.classList.add('out-wipe-up');
          e.target.querySelector('.wrap-infohelp_social-item_current').style.opacity = 1;
        });
      });
    }
  }, []);

  const handleViewAllClick = () => {
    const btnviewall = document.querySelector('.sv-block2-btn_viewAll');
    btnviewall.style.display = 'none';
    const el = document.querySelector('.sv-block2_view-detail');
    el.style.display = 'block';
    el.classList.remove('scale-out-top');
    el.classList.add('scale-up-top');
    document.querySelector('.sv-block2-btn_hidden').style.display = 'flex';
  };

  const handleHiddenClick = () => {
    const btnHidden = document.querySelector('.sv-block2-btn_hidden');
    btnHidden.style.display = 'none';
    const el = document.querySelector('.sv-block2_view-detail');
    el.classList.remove('scale-up-top');
    el.classList.add('scale-out-top');
    setTimeout(() => {
      el.style.display = 'none';
    }, 500);
    document.querySelector('.sv-block2-btn_viewAll').style.display = 'flex';
  };

  const onGetCodeClick = async () => {
    try {
      if (fClickedAlready === true) {
        return;
      }
      let timerInterval = 0;
      const Swal = window.Swal;
      Swal.fire({
        html: 'GIFTCODE sẽ hiển thị sau <b></b> giây.',
        timer: 60000,
        showCloseButton: true,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector('b');
          timerInterval = setInterval(() => {
            b.textContent = (parseInt(Swal.getTimerLeft()) / 1000).toFixed(0).toString();
          }, 1000);
        },
        willClose: async () => {
          if (Swal.getTimerLeft() > 5000) {
            Swal.fire({
              text: 'Lỗi thao tác',
              showClass: {
                popup: 'animate__animated animate__fadeInDown',
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
              },
            });
            return;
          }
          let myHeader = new Headers();
          myHeader.append('Content-Type', 'application/json');
          var requestOptions = {
            method: 'GET',
            headers: myHeader,
          };
          setFClickedAlready(true);
          await fetch('https://api-freecode.khuyenmai.app/web/getCode?site=new88', requestOptions)
            .then((response) => response.json())
            .then((result) => {
              if (parseInt(result.status_code) === 200) {
                const resultTest = result.code;
                document.getElementById('btnGetCode').innerHTML = resultTest;
                document.getElementById('btnGetCode').enable = false;
              } else {
                const resultTest = result.text_mess;
                document.getElementById('btnGetCode').innerHTML = result.title_mess;
                document.getElementById('btnGetCode').enable = false;
                Swal.fire({
                  title: result.title_mess,
                  text: result.text_mess,
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                  },
                });
              }
            });
        },
      });
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const delay = (t) => {
    return new Promise((resolve) => setTimeout(resolve, t));
  };
  return (
    <>
      <Spin spinning={isLoading}>
        <div className="page-content">
          <BreadCrumb
            title="New88"
            pageTitle="Pages"
            slug="pages-management"
          />
          <Row>
            <Col span={12}>sad</Col>
            <Col span={12} className="body">

                <div className="site grid-container container hfeed" id="page" style={{height:'auto', width:'800px'}}>
                    <div className="site-content" id="content">
                    <div className="content-area" id="primary">
                        <main className="site-main" id="main">
                        <article id="post-5354" className="post-5354 page type-page status-publish infinite-scroll-item" itemType="https://schema.org/CreativeWork" itemScope>
                            <div className="inside-article">
                            <div className="wrap-sv">
                                <div className="sv-top">
                                <LogoNew88/>


                                
                               
                                <div className="sv-container wrap-infohelp">
                                    <div className="wrap-infohelp_client">
                                    <a href="https://new88fun.com/CS_Naprut/" className="wrap-infohelp_client-item">
                                        <div className="wrap-infohelp_client-item-title">HỖ TRỢ 24/7</div>
                                        <div className="wrap-infohelp_client-item-icon display-center">
                                        <img width={63} height={63} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/icon2.png" alt="ho tro" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon2.png" />
                                        
                                        </div>
                                        <div className="wrap-infohelp_client-item-name">NẠP-RÚT</div>
                                    </a>
                                    <a href="https://new88fun.com/CS_khuyenmai/" className="wrap-infohelp_client-item">
                                        <div className="wrap-infohelp_client-item-title">HỖ TRỢ 24/7</div>
                                        <div className="wrap-infohelp_client-item-icon display-center">
                                        <img width={59} height={39} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/icon3.png" alt="ho tro" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon3.png" /><noscript>&lt;img
                                            width="59" height="39"
                                            src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon3.png"
                                            alt="ho tro" /&gt;</noscript>
                                        </div>
                                        <div className="wrap-infohelp_client-item-name">KHUYẾN MÃI</div>
                                    </a>
                                    <a href="https://new88fun.com/CS_vandekhac/" className="wrap-infohelp_client-item">
                                        <div className="wrap-infohelp_client-item-title">HỖ TRỢ 24/7</div>
                                        <div className="wrap-infohelp_client-item-icon display-center">
                                        <img width={63} height={63} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/icon6.png" alt="ho tro" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon6.png" /><noscript>&lt;img
                                            width="63" height="63"
                                            src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon6.png"
                                            alt="ho tro" /&gt;</noscript>
                                        </div>
                                        <div className="wrap-infohelp_client-item-name">VẤN ĐỀ KHÁC</div>
                                    </a>
                                    <a href="tel:+84704999988" className="wrap-infohelp_client-item">
                                        <div className="wrap-infohelp_client-item-title">HOTLINE 24/7</div>
                                        <div className="wrap-infohelp_client-item-icon display-center">
                                        <img width={63} height={64} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/icon1.png" alt="ho tro" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon1.png" /><noscript>&lt;img
                                            width="63" height="64"
                                            src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon1.png"
                                            alt="ho tro" /&gt;</noscript>
                                        </div>
                                        <div className="wrap-infohelp_client-item-name">GỌI TỔNG ĐÀI</div>
                                    </a>
                                    <a href="https://new88fun.com/fbnew88/" className="wrap-infohelp_client-item">
                                        <div className="wrap-infohelp_client-item-title">HỖ TRỢ 24/7</div>
                                        <div className="wrap-infohelp_client-item-icon display-center">
                                        <img width={65} height={66} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/icon4.png" alt="ho tro" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon4.png" /><noscript>&lt;img
                                            width="65" height="66"
                                            src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon4.png"
                                            alt="ho tro" /&gt;</noscript>
                                        </div>
                                        <div className="wrap-infohelp_client-item-name">FACEBOOK</div>
                                    </a>
                                    <a href="https://new88fun.com/CS_Khieunai/" className="wrap-infohelp_client-item">
                                        <div className="wrap-infohelp_client-item-title">HỖ TRỢ 24/7</div>
                                        <div className="wrap-infohelp_client-item-icon display-center">
                                        <img width={63} height={64} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/icon5.png" alt="ho tro" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon5.png" /><noscript>&lt;img
                                            width="63" height="64"
                                            src="//new88.online/wp-content/uploads/trang-chu/assets/images/icon5.png"
                                            alt="ho tro" /&gt;</noscript>
                                        </div>
                                        <div className="wrap-infohelp_client-item-name">KHIẾU NẠI</div>
                                    </a>
                                    </div>
                                    
                                </div>
                                <div className="wrap-infohelp_social">
                                    <div className="wrap-infohelp_social-title">
                                        Cập nhật tin khuyến mãi <span>NEW88</span> mới nhất
                                    </div>
                                    <div className="wrap-infohelp_social_wrap-item">

                                        <a href="https://new88fun.com/fbnew88/" className="wrap-infohelp_social-item" target="_blank">
                                        <img width={118} height={118} className="wrap-infohelp_social-item_current" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/fb.png" alt="facebook" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/fb.png" />
                                        <img width={125} height={150} className="wrap-infohelp_social-item_hover wrap-infohelp_social-item_hover entered lazyloaded" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/fb-hover.png" alt="facebook" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/fb-hover.png" />
                                        </a>
                                        <a href="https://new88fun.com/ytbnew88/" className="wrap-infohelp_social-item" target="_blank">
                                        <img width={119} height={118} className="wrap-infohelp_social-item_current" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/youtube.png" alt="youtube" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/youtube.png" />
                                        <img width={125} height={150} className="wrap-infohelp_social-item_hover wrap-infohelp_social-item_hover entered lazyloaded" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/youtube-hover.png" alt="youtube" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/youtube-hover.png" />
                                        </a>
                                        <a href="https://new88fun.com/Telegram_n88/" className="wrap-infohelp_social-item" target="_blank">
                                        <img width={118} height={118} className="wrap-infohelp_social-item_current" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/tele.png" alt="tele" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/tele.png" />
                                        <img width={125} height={150} className="wrap-infohelp_social-item_hover wrap-infohelp_social-item_hover entered lazyloaded" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/tele-hover.png" alt="tele" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/tele-hover.png" />
                                        </a>
                                        <a href="https://new88.site//" className="wrap-infohelp_social-item" target="_blank">
                                        <img width={119} height={118} className="wrap-infohelp_social-item_current" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/dowload.png" alt="download" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/dowload.png" />
                                        <img width={125} height={150} className="wrap-infohelp_social-item_hover wrap-infohelp_social-item_hover entered lazyloaded" src="https://new88.online/wp-content/uploads/trang-chu/assets/images/dowload-hover.png" alt="download" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/dowload-hover.png" />
                                        </a>
                                    </div>
                                    </div>
                                <div className="sv-container sv-locale">
                                    <div className="sv-locale-title">
                                    <svg width={236} height={11} viewBox="0 0 236 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M227.092 10.9058H235.754L224.549 0H0.5V1.82573H218.009L227.092 10.9058Z" fill="#FEAD00" />
                                    </svg>
                                    <p>CÁC ĐƯỜNG TRUYỀN TỐC ĐỘ CAO</p>
                                    <svg width={236} height={11} viewBox="0 0 236 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.90759 10.9058H0.246277L11.4508 0H235.5V1.82573H17.9909L8.90759 10.9058Z" fill="#FEAD00" />
                                    </svg>
                                    </div>
                                    <div className="sv-locale_wrap-item">
                                    <a href="https://www.88new.cc/" className="sv-locale-item" target="_blank">
                                        CẦN THƠ
                                    </a>
                                    <a href="https://www.new881.com/" className="sv-locale-item" target="_blank">
                                        ĐÀ NẴNG
                                    </a>
                                    <a href="https://www.new8811.com/" className="sv-locale-item" target="_blank">
                                        HỒ CHÍ MINH
                                    </a>
                                    <a href="https://www.new8855.com/" className="sv-locale-item" target="_blank">
                                        PHÚ QUỐC
                                    </a>
                                    <a href="https://www.new88w.com/" className="sv-locale-item" target="_blank">
                                        NHA TRANG
                                    </a>
                                    <a href="https://new88fun.com/link_new88_hanoi" className="sv-locale-item" target="_blank">
                                        HÀ NỘI
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="sv-container sv-block1">
                                <img width={384} height={322} src="https://new88.online/wp-content/uploads/2023/06/nhanvat-1.webp" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/2023/06/nhanvat-1.webp" /><noscript>&lt;img
                                    width="384" height="322"
                                    src="//new88.online/wp-content/uploads/2023/06/nhanvat-1.webp"
                                    alt="rollbar"&gt;</noscript>
                                <div className="sv-block1_wrap-content">
                                    <p className="sv-block1-text">NẾU BẠN KHÔNG TRUY CẬP ĐƯỢC VÀO <a href="https://new88.com">NEW88.COM</a>
                                    LIÊN HỆ VỚI CHÚNG TÔI QUA MAIL
                                    </p>
                                    <a className="sv-block1-btn display-center" href="/cdn-cgi/l/email-protection#bddcd9d0d4d3fdd3d8ca858593ded2d0"><span className="__cf_email__" data-cfemail="7c3d181115123c32190b4444521f1311">Admin@New88.com</span></a>
                                </div>
                                </div>
                                <div className="sv-games">
                                <div className="sv-container sv-games-title">
                                    <svg width={236} height={11} viewBox="0 0 236 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M227.092 10.9058H235.754L224.549 0H0.5V1.82573H218.009L227.092 10.9058Z" fill="#FEAD00" />
                                    </svg>
                                    <span>CÁC TRÒ CHƠI NỔI BẬT</span>
                                    <svg width={236} height={11} viewBox="0 0 236 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.90759 10.9058H0.246277L11.4508 0H235.5V1.82573H17.9909L8.90759 10.9058Z" fill="#FEAD00" />
                                    </svg>
                                </div>
                                <div className="sv-container sv-games-rollbar">
                                    <img width={98} height={98} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2098%2098'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game1.png" /><noscript>&lt;img
                                    width="98" height="98"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game1.png"
                                    alt="rollbar" /&gt;</noscript>
                                    <img width={98} height={98} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2098%2098'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game2.png" /><noscript>&lt;img
                                    width="98" height="98"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game2.png"
                                    alt="rollbar" /&gt;</noscript>
                                    <img width={98} height={98} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2098%2098'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game3.png" /><noscript>&lt;img
                                    width="98" height="98"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game3.png"
                                    alt="rollbar" /&gt;</noscript>
                                    <img width={97} height={97} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2097%2097'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game4.png" /><noscript>&lt;img
                                    width="97" height="97"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game4.png"
                                    alt="rollbar" /&gt;</noscript>
                                    <img width={97} height={97} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2097%2097'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game5.png" /><noscript>&lt;img
                                    width="97" height="97"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game5.png"
                                    alt="rollbar" /&gt;</noscript>
                                    <img width={97} height={97} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2097%2097'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game6.png" /><noscript>&lt;img
                                    width="97" height="97"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game6.png"
                                    alt="rollbar" /&gt;</noscript>
                                    <img width={97} height={97} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2097%2097'%3E%3C/svg%3E" alt="rollbar" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/game7.png" /><noscript>&lt;img
                                    width="97" height="97"
                                    src="//new88.online/wp-content/uploads/trang-chu/assets/images/game7.png"
                                    alt="rollbar" /&gt;</noscript>
                                </div>
                                </div>
                                <div className="sv-container sv-block2">
                                <div className="sv-block2-title">
                                    HỎI ĐÁP VỀ NEW88
                                </div>
                                <div className="sv-block2-des">
                                    Dưới đây là một vài câu hỏi của người chơi được chúng tôi tổng hợp lại.
                                    Nếu có bất kỳ thắc mắc sẽ được giải đáp chi tiết nhất.
                                </div>
                                <div className="sv-block2-btn sv-block2-btn_viewAll display-center">
                                    XEM CHI TIẾT
                                </div>
                                <div style={{display: 'none'}} className="sv-block2_view-detail">
                                    <div className="sv-block2_view-detail_text-1">VỀ CHÚNG TÔI</div>
                                    <div className="sv-block2_view-detail_text-1">NEW88 - NƠI CẢM XÚC KHÔNG GIỚI HẠN
                                    </div>
                                    <div className="sv-block2_view-detail_text-1">Giải Trí - Hợp Pháp - Bảo Mật</div>
                                    <div className="sv-block2_view-detail_text-2">
                                    NEW88.COM là một công ty giải trí được đăng ký hợp pháp ở Costa Rica, tất cả
                                    các hoạt động kinh doanh cá
                                    cược
                                    đều tuân theo hiệp ước cá cược của chính phủ Costa Rica. Trong thị trường cá
                                    cược trực tuyến ngày càng
                                    sôi nổi
                                    và được đông đảo người chơi lựa chọn, chúng tôi không ngừng tìm kiếm những
                                    đổi mới và thay đổi, và chúng
                                    tôi
                                    phát triển các phương pháp trò chơi khác nhau với đội ngũ sáng tạo đáng tự
                                    hào của chúng tôi. Cung cấp
                                    cho
                                    khách
                                    hàng nhiều sự lựa chọn, lĩnh vực chính của công ty NEW88.COM chúng tôi là
                                    cung cập các sản phẩm giải trí
                                    kích
                                    thích, chu đáo và dịch vụ chất lượng cao, có tỉ lệ thắng lớn.
                                    </div>
                                    <div className="sv-block2_view-detail_text-1">Đa dạng về sản phẩm</div>
                                    <div className="sv-block2_view-detail_scrollBar">
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="nohu" data-lazy-src="//new88.online/wp-content/uploads/2023/06/nohu.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/nohu.webp"
                                        width="91px" alt="nohu"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt=" the thao" data-lazy-src="//new88.online/wp-content/uploads/2023/06/thethao.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/thethao.webp"
                                        width="91px" alt=" the thao"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="tai xiu" data-lazy-src="//new88.online/wp-content/uploads/2023/06/taixiu.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/taixiu.webp"
                                        width="91px" alt="tai xiu"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="xoc dia" data-lazy-src="//new88.online/wp-content/uploads/2023/06/xocdia.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/xocdia.webp"
                                        width="91px" alt="xoc dia"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="xoso" data-lazy-src="//new88.online/wp-content/uploads/2023/06/xoso.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/xoso.webp"
                                        width="91px" alt="xoso"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="ban ca" data-lazy-src="//new88.online/wp-content/uploads/2023/06/banca.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/banca.webp"
                                        width="91px" alt="ban ca"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="casino" data-lazy-src="//new88.online/wp-content/uploads/2023/06/casino.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/casino.webp"
                                        width="91px" alt="casino"&gt;</noscript> </li>
                                    <li> <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2091%200'%3E%3C/svg%3E" width="91px" alt="da ga" data-lazy-src="//new88.online/wp-content/uploads/2023/06/daga.webp" /><noscript>&lt;img
                                        src="//new88.online/wp-content/uploads/2023/06/daga.webp"
                                        width="91px" alt="da ga"&gt;</noscript> </li>
                                    </div>
                                    <div className="sv-block2_view-detail_text-1">Nạp tiền, rút tiền siêu tốc</div>
                                    <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%200'%3E%3C/svg%3E" width="100%" data-lazy-src="//new88.online/wp-content/uploads/2023/06/banne1.webp" /><noscript>&lt;img
                                    src="//new88.online/wp-content/uploads/2023/06/banne1.webp"
                                    width="100%"&gt;</noscript>
                                    <div className="sv-block2_view-detail_text-2">
                                    NEW88 sở hữu đội ngũ kỹ thuật hùng mạnh với tư duy sáng tạo cao đã sáng tạo
                                    ra công nghệ nạp rút tiền
                                    tích hợp
                                    cộng nghệ API ngân hàng, xử lý hoàn toàn tự động hàng ngàn giao dịch cùng
                                    một lúc chỉ mất thời gian 3-5
                                    phút.
                                    Không giới hạn số lần rút tiền, hỗ trợ tối đa lên đến 10 tỷ một ngày.
                                    </div>
                                    <div className="sv-block2_view-detail_text-1">Dịch vụ chăm sóc khách hàng 24/7 Nhiệt
                                    Tình - Thân Thiện - Chuyên
                                    Nghiệp</div>
                                    <div className="sv-block2_view-detail_text-2">
                                    Chân Thành Đối Đãi, Dùng Tín Phục Người, Tận Tâm Phục Vụ, Khách Hàng Tín
                                    Nhiệm Và Hài Lòng luôn là mục
                                    tiêu và
                                    kim chỉ nam duy nhất cho mọi hoạt động của chúng tôi! Đội ngũ chăm sóc khách
                                    hàng NEW88 hoạt động xuyên
                                    suốt
                                    365
                                    ngày thông qua nhiều kênh hỗ trợ khách nhau như Facebook, Chát trực tiếp,
                                    Telegram, Zalo, Hotline...
                                    luôn sẵn
                                    sàng hỗ trợ tất cả mọi vấn đề khi khách hàng gặp phải.
                                    </div>
                                    <div className="sv-block2_view-detail_text-1">Bảo mật thông tin khách hàng</div>
                                    <div className="sv-block2_view-detail_text-2">
                                    Tất cả thông tin cá nhân cung cấp bởi những người sử dụng được chuyển bằng
                                    phần mềm Bảo mật (theo tiêu
                                    chuẩn
                                    bảo
                                    mật SSL 128bit) và được lưu giữ trong môi trường hoạt động an toàn và không
                                    ai có thể xâm nhập vào được.
                                    Sự
                                    truy
                                    nhập nội bộ vào dữ liệu được giới hạn và kiểm soát nghiêm ngặt máy chủ được
                                    đặt tại nước ngoài đảm bảo
                                    an toàn
                                    tuyệt đối cho thành viên tham gia.
                                    </div>
                                    <div className="sv-block2_view-detail_text-1">Nhiều chương trình khuyến mãi hấp dẫn
                                    </div>
                                    <div className="sv-block2_view-detail_text-2">
                                    Để cảm ơn tất cả những khách hàng luôn tin tưởng và gắn bó lâu dài cùng
                                    NEW88, chúng tôi luôn dành cho
                                    khách
                                    hàng những ưu đãi đặc biệt nhất, và luôn đảm bảo quyền lợi cho khách hàng
                                    khi tham gia tại NEW88.COM một
                                    số
                                    chương trình tiêu biểu như:
                                    <br />
                                    + Phát tiền thưởng nghìn tỷ 06 hàng tháng <br />
                                    + Phát thưởng Ngày hội thành viên 16 hàng tháng <br />
                                    + Phát thưởng lì xì bí mật 26 hàng tháng <br />
                                    + Hoàn trả ngay lập tức <br />
                                    + Tặng thưởng ngày vàng 09,19,29 hàng tháng <br />
                                    + Tặng thưởng thành viên tham gia cược nhiều <br />
                                    + Thưởng điểm danh <br />
                                    + Thưởng nhiệm vụ kỳ <br />
                                    + Ngoài ra còn rất nhiều chương trình khuyến mãi hấp dẫn khác <br />
                                    </div>
                                    <div className="sv-block2_view-detail_text-2">Những hoặc động cùng NEW88</div>
                                    <div className="sv-block2_view-detail_images"> <img width={1280} height={960} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20960'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img1.webp" /><noscript>&lt;img
                                        width="1280" height="960"
                                        src="//new88.online/wp-content/uploads/2023/06/img1.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img2.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img2.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img3.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img3.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img4.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img4.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={851} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20851'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img5.webp" /><noscript>&lt;img
                                        width="1280" height="851"
                                        src="//new88.online/wp-content/uploads/2023/06/img5.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img6.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img6.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img7.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img7.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img8.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img8.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={720} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20720'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img9.webp" /><noscript>&lt;img
                                        width="1280" height="720"
                                        src="//new88.online/wp-content/uploads/2023/06/img9.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={720} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20720'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img10.webp" /><noscript>&lt;img
                                        width="1280" height="720"
                                        src="//new88.online/wp-content/uploads/2023/06/img10.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={960} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20960'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img11.webp" /><noscript>&lt;img
                                        width="1280" height="960"
                                        src="//new88.online/wp-content/uploads/2023/06/img11.webp"
                                        alt="slide"&gt;</noscript>
                                    <img width={1280} height={853} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20853'%3E%3C/svg%3E" alt="slide" data-lazy-src="//new88.online/wp-content/uploads/2023/06/img12.webp" /><noscript>&lt;img
                                        width="1280" height="853"
                                        src="//new88.online/wp-content/uploads/2023/06/img12.webp"
                                        alt="slide"&gt;</noscript>
                                    </div>
                                </div>
                                <div style={{display: 'none', marginTop: 20}} className="sv-block2-btn sv-block2-btn_hidden display-center">
                                    THU GỌN
                                </div>
                                <div className="sv-block2-title">
                                    KẾT LUẬN
                                </div>
                                <div className="sv-block2-des">
                                    Những điều bạn cần hiểu và biết về nhà cái New88 đã được đề cập khá cụ thể.
                                    Đây là một nhà cái cực kỳ uy tín và an toàn cho người chơi cá cược.
                                    Nhanh tay đăng ký ngay một tài khoản để chơi ngay nào!!!
                                </div>
                                <div className="sv-block2-title">
                                    ĐĂNG KÝ
                                </div>
                                <div className="sv-block2-des">
                                    Các bạn hãy truy cập ngay vào link <a href="https://new88.vip">NEW88.VIP</a>
                                    Đăng ký ngay cho mình một tài khoản để thỏa sức đam mê mình nhé
                                </div>
                                </div>
                                <div className="sv-container sv-block3">
                                <div className="sv-block2-title">
                                    CODE6688
                                </div>
                                <div className="sv-block2-des">
                                    NEW88 dành tặng mỗi tài khoản 1 code mỗi ngày.
                                    <p>
                                    </p>
                                </div>
                                <div className="sv-block2-btn sv-block3-getCode display-center" id="btnGetCode" onClick={() =>onGetCodeClick()} >
                                    NHẬN CODE
                                </div>
                                </div>
                                <div className="sv-footer sv-footer-pc">
                                <div className="sv-container">
                                    <div className="sv-footer-top">
                                    <img width={379} height={183} className="sv-footer-logo" src="https://new88.online/wp-content/uploads/2023/06/logo-1.png" alt data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/logo.png" />
                                    <div className="sv-footer-dmca">
                                        <a href="https://www.dmca.com/r/eg2z311">
                                        <img width={251} height={126} src="https://new88.online/wp-content/uploads/trang-chu/assets/images/dmca.png" alt data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/dmca.png" />
                                        </a>
                                    </div>
                                    <div className="sv-footer_center-help">
                                        <div className="sv-footer_center-help-title">TRUNG TÂM TRỢ GIÚP</div>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Liên
                                        hệ New88</a>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Đại
                                        lý</a>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Chính
                                        sách và bảo mật</a>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Điều
                                        khoản điều kiện</a>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Câu
                                        hỏi thường gặp</a>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Miễn
                                        trách nhiệm</a>
                                        <a href="https://new88.online/" className="sv-footer_center-help-name">Chơi
                                        có trách nhiệm</a>
                                    </div>
                                    </div>
                                    <div className="sv-footer-partner">
                                    <div className="sv-footer-partner-title">Với Các Đối Tác</div>
                                    <img width={1200} height={102} src="https://new88.online/wp-content/uploads/2023/06/partner.webp" alt="Doi tac" data-lazy-src="//new88.online/wp-content/uploads/2023/06/partner.webp" /><noscript>&lt;img
                                        width="1200" height="102"
                                        src="//new88.online/wp-content/uploads/2023/06/partner.webp"
                                        alt="Doi tac" /&gt;</noscript>
                                    </div>
                                </div>
                                </div>
                                <div className="sv-footer sv-footer-mobile sv-container">
                                <div className="sv-footer-left">
                                    <div className="sv-footer-left_wrap-logo">
                                    <img width={379} height={183} className="sv-footer-logo" src="https://new88.online/wp-content/uploads/2023/06/logo-1.png" alt data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/logo.png" /><noscript>&lt;img
                                        width="379" height="183" class="sv-footer-logo"
                                        src="//new88.online/wp-content/uploads/trang-chu/assets/images/logo.png"
                                        alt=""&gt;</noscript>
                                    <div className="sv-footer-dmca">
                                        <a href="https://www.dmca.com/r/eg2z311">
                                        <img width={251} height={126} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20251%20126'%3E%3C/svg%3E" alt="DMCA" data-lazy-src="//new88.online/wp-content/uploads/trang-chu/assets/images/dmca.png" /><noscript>&lt;img
                                            width="251" height="126"
                                            src="//new88.online/wp-content/uploads/trang-chu/assets/images/dmca.png"
                                            alt="DMCA" /&gt;</noscript>
                                        </a>
                                        <p>
                                        New88 mảng game online của nhà cái M.A.N. <br />
                                        Bao gồm các trò chơi trực tuyến baccarat, rồng hổ,
                                        xì dách, game nổ hủ, bắn cá, xóc dĩa, thể thao điện tử...
                                        </p>
                                    </div>
                                    </div>
                                    <div className="sv-footer-partner">
                                    <div className="sv-footer-partner-title">Với Các Đối Tác</div>
                                    <img width={1200} height={102} src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201200%20102'%3E%3C/svg%3E" alt="Doi tac" data-lazy-src="//new88.online/wp-content/uploads/2023/06/partner.webp" /><noscript>&lt;img
                                        width="1200" height="102"
                                        src="//new88.online/wp-content/uploads/2023/06/partner.webp"
                                        alt="Doi tac" /&gt;</noscript>
                                    </div>
                                </div>
                                <div className="sv-footer_center-help">
                                    <div className="sv-footer_center-help-title">TRUNG TÂM TRỢ GIÚP</div>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Liên hệ
                                    New88</a>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Đại lý</a>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Chính sách và
                                    bảo mật</a>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Điều khoản
                                    điều kiện</a>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Câu hỏi
                                    thường gặp</a>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Miễn trách
                                    nhiệm</a>
                                    <a href="https://new88.online/" className="sv-footer_center-help-name">Chơi có trách
                                    nhiệm</a>
                                </div>
                                </div>
                            </div>
                            <div className="entry-content" itemProp="text">
                            </div>
                            </div>
                        </article>
                        </main>
                    </div>
                    </div>
                </div>
            </Col>
          </Row>
        </div>
      </Spin>
    </>
  );
};

export default New88;
