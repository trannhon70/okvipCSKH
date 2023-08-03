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

    const logoHtml = `
        <section class="shbet-logo">
            <img class="shbet-logo-image" src="${serverUrl}/${data.domain.logo}">
        </section>
    `;

    const warningHtml = `
        <section class="shbet-note" style="background-color: ${data.domain.backgroundColor}; border-radius: ${data.domain.borderRadius}px;">
            <div class="shbet-note-title">
                <img class="warning-image" src="${serverUrl}/${data.domain.icon}">
                <h2>
                    ${data.domain.title}
                </h2>
                <img class="warning-image" src="${serverUrl}/${data.domain.icon}">
            </div>
            <div class="shbet-note-content">
                ${data.domain.description}
            </div>
        </section>
    `

    // Sắp xếp mảng data.contact theo thuộc tính "order"
    const sortedContacts = data.contact.sort((a, b) => a.order - b.order);
    // Map và tạo chuỗi HTML cho các phần tử đã sắp xếp
    const contactElements = sortedContacts.map((contact) => {
        return `<div class="shbet-card" style="background-color: ${contact.backgroundColor}; border-radius: ${contact.borderRadius}px;">
                <a href="${contact.slug}">
                    <div class="shbet-card-title">
                        <p>${contact.title}</p>
                    </div>
                    <div class="shbet-card-image">
                        <img src="${serverUrl}/${contact.icon}">
                    </div>
                </a>
            </div>`;
    });
    let contactHtml = `
    <section class="shbet-list-card">
        ${contactElements.join('')}
    </section>
    `;

    const sortedContactType = data.contactType.sort((a, b) => a.order - b.order);
    const contactType = sortedContactType.map((contactType) => {
        return `
        <div class="shbet-option" style="background-color: ${contactType.backgroundColor}; border-radius: ${contactType.borderRadius}px;">
            <a href="${contactType.slug}">
                <p>${contactType.title}</p>
                <div class="shbet-circle">
                    <img src="${serverUrl}/${contactType.img}">
                </div>
            </a>
        </div>
        `;
    });
    let contactTypeHtml = `
    <section class="shbet-list-option">
        ${contactType.join('')}
    </section>
    `;

    const eventHtml = `
        <section class="title-vip">
        <a href="vip.html" target="_blank">
            <div id="myBtn">
                <p>SẮP RA MẮT ĐẶC QUYỀN VIP</p>
                <p>Dự kiến: Cuối tháng 08/2023</p>
            </div>
        </a>
        </section>
    `

    let html = `
    <div class="container-shbet" style="background-image: url(${serverUrl}/${data.domain.backgroudUrl});">
        <div class="content-wrapper">
            ${logoHtml}

            ${warningHtml}

            ${contactHtml}

            ${contactTypeHtml}

            ${eventHtml}
        </div>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', html);

}

userAction()