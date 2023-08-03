var url = 'http://localhost:4444/api/domain/getByDomainId/649feb5407a02244de563206';
var serverUrl = "http://localhost:4444"

const userAction = async () => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json();
    let data = myJson.data
    const logo = myJson.banner.img;
    data.sort((a, b) => a.result.order1 - b.result.order1);

    const renderComponentByKey = (key, value) => {
        switch (key) {
            case "logo":
                return `
                <div class="head-top">
                <div class="left"><a href="${value.slug}"><img
                            src="https://jun8858.com/assets/images/Jun881.png"></a>
                </div>
                <div class="right">
                    <img src="https://jun8858.com/assets/images/NhanVat.png">
                </div>

                </div>
                `;
            case "note":
                return `
                <section class="note">
                    <div class="cskh_text-1">
                        NẾU BẠN KHÔNG TRUY CẬP ĐƯỢC VÀO Jun88
                        HÃY LIÊN HỆ VỚI CHÚNG TÔI QUA MAIL
                    </div>
                    <a href="mailto:admin@Jun88.vip" class="cskh_btn-1 display-center" target="_blank">
                        admin@Jun88.vip
                    </a>
                    <div class="cskh_text-1">
                        CHÚNG TÔI SẼ HỖ TRỢ BẠN
                        BẰNG ĐƯỜNG LINK DỰ PHÒNG MỚI NHẤT
                    </div>
                </section>
                `;
            case "contact":
                let dataCard = '';

                value.contacts.sort((a, b) => a.order - b.order);
                value.contacts.forEach((item) => {
                    dataCard += `
                    `
                });

                return `

                <div class="cskh_list">
                    ${dataCard}
 

                    <a class="cskh_item" target="_blank" onclick="clickTawktoKmSP();">
                        <div class="cskh_item_icon display-center">
                            <img src="https://jun8858.com/assets/images/24h-2.png">
                        </div>
                        <div class="cskh_item_btn display-center">TƯ VẤN SẢN PHẨM</div>
                    </a>

                    <a class="cskh_item" target="_blank" onclick="clickTawktoNapTien();">
                        <div class="cskh_item_icon display-center">
                            <img src="https://jun8858.com/assets/images/naptien.png">
                        </div>
                        <div class="cskh_item_btn display-center">HỖ TRỢ NẠP TIỀN</div>
                    </a>

                    <a class="cskh_item" target="_blank" onclick="clickTawktoRutTien();">
                        <div class="cskh_item_icon display-center">
                            <img src="https://jun8858.com/assets/images/ruttien.png">
                        </div>
                        <div class="cskh_item_btn display-center">HỖ TRỢ RÚT TIỀN</div>
                    </a>

                    <a href="https://553389.com/DailyJun88" class="cskh_item" target="_blank">
                        <div class="cskh_item_icon display-center">
                            <img src="https://jun8858.com/assets/images/tuvan.png">
                        </div>
                        <div class="cskh_item_btn display-center"> TELEGRAM TƯ VẤN ĐẠI LÝ</div>
                    </a>

                    <a href=" https://553389.com/kn" class="cskh_item" target="_blank">
                        <div class="cskh_item_icon display-center">
                            <img src="https://jun8858.com/assets/images/khieunai.png">
                        </div>
                        <div class="cskh_item_btn display-center">TELEGRAM HỖ TRỢ KHIẾU NẠI</div>
                    </a>

                </div>
                `;
            case "contact_type":
                let dataOption = '';

                value.contactType.sort((a, b) => a.order - b.order);
                value.contactType.forEach((item) => {
                    dataOption += `
                    <a href="https://553389.com/ZALO"><img src="https://jun8858.com/assets/images/zalo.png"></a>
                    `
                });
                return `

                <div class="cskh_footer">
                    <div class="cskh_footer_icons">
                    ${dataOption}
                    </div>
                </div>
                `;
            case "footer":
                return ``;
            default:
                return null;
        }
    };

    let generateHtml = '';

    data.forEach((item) => {
        const key = item.key;
        const result = item.result;
        generateHtml += renderComponentByKey(key, result)
    })

    let html = `
    <div class="wrap-cskh" style="background-image: url(${serverUrl}/${logo});">
    <div class="wrap-cskh_content">
        ${generateHtml}
        </div>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', html);

}

userAction()