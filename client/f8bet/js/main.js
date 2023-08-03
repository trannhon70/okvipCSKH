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
                <div class="shbet-logo">
                    <img class="shbet-logo-image" src="${serverUrl}/${value.logo}">
                </div>
                `;
            case "note":
                return `
                <div class="shbet-note" style="background-color: ${value.backgroundColor}; border-radius: ${value.borderRadius}px;">
                    <div class="shbet-note-title">
                        <img class="warning-image" src="${serverUrl}/${value.icon}">
                        <h2>
                            ${value.title}
                        </h2>
                        <img class="warning-image" src="${serverUrl}/${value.icon}">
                    </div>
                    <div class="shbet-note-content">
                    ${value.description}
                    </div>
                </div>

                `;
            case "contact":
                let dataCard = '';

                value.contacts.sort((a, b) => a.order - b.order);
                value.contacts.forEach((item) => {
                    dataCard += `
                    <div class="shbet-card" style="background-color: ${value.backgroundColor}; border-radius: ${value.borderRadius}px;">
                        <a href="${item.slug}">
                            <div class="shbet-card-title">
                                <p>${item.title}</p>
                            </div>
                            <div class="shbet-card-image">
                                <img src="${serverUrl}/${item.icon}">
                            </div>
                        </a>
                    </div>
                    `
                });

                return `
                <div class="shbet-list-card">
                    ${dataCard}
                </div>
                `;
            case "contact_type":
                let dataOption = '';

                value.contactType.sort((a, b) => a.order - b.order);
                value.contactType.forEach((item) => {
                    dataOption += `
                    <div class="shbet-option" style="background-color: ${value.backgroundColor}; border-radius: ${value.borderRadius}px;">
                        <a href="${item.slug}">
                            <p>${item.title}</p>
                            <div class="shbet-circle">
                                <img src="${serverUrl}/${item.img}">
                            </div>
                        </a>
                    </div>
                    `
                });
                return `
                <div class="shbet-list-option">
                    ${dataOption}
                </div>
                `;
            case "footer":
                return `
                <div class="title-vip" style="max-width: 600px; width: 100%; background-color: ${value.backgroundColor}; border-radius: ${value.borderRadius}px;">
                    <a href=${value.slug}" target="_blank">
                        <div id="myBtn">
                        <p>${value.title}</p>
                        <p>${value.description}</p>
                        </div>
                     </a>                    
                </div>
                `;
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
    <div class="container-shbet" style="background-image: url(${serverUrl}/${logo});">
        <div class="content-wrapper">
        ${generateHtml}
        </div>
    </div>
    `

    document.body.insertAdjacentHTML('beforeend', html);

}

userAction()