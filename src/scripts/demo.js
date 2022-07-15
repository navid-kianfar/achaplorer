((window, document, undefined) => {
    let administrationMenuVisible = false;
    const administrationBtn = document.querySelector('.administration .actions button');
    const administrationMenu = administrationBtn.parentElement.querySelector('ul');

    administrationMenu.onclick = () => administrationBtn.click();
    administrationBtn.onclick = () => {
        administrationMenuVisible = !administrationMenuVisible;
        administrationMenu.style.display = administrationMenuVisible ? 'block' : 'none';
    };

    const tabMenus = document.querySelectorAll('.aui-ribbon .tabs-header ul li');
    const tabContents = document.querySelectorAll('.aui-ribbon .tabs-content .tab-content');
    tabMenus.forEach(tab => {
        tab.onclick = () => {
            tabMenus.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(con => {
                con.classList.remove('active');

                if (tab.getAttribute('data-tab') === con.getAttribute('data-tab')){
                    con.classList.add('active');
                }
            });
        };
    });

    const tabContentButtons = document.querySelectorAll('.aui-ribbon .tabs-content .tab-content button');
    tabContentButtons.forEach(btn => {
        let menuVisible = false;
        const dropMenu = btn.parentElement.querySelector('.menu-items');
        if (dropMenu) {
            btn.onclick = () => {
                menuVisible = !menuVisible;
                dropMenu.style.display = menuVisible ? 'block' : 'none';
            };
            dropMenu.onclick = () => btn.click();
        }
    });

    const fileExplorerTab = document.querySelector('.aui-split-panel .folder-explorer-panel');
    const splitTab = document.querySelector('.aui-split-panel .panel-handler button');
    splitTab.onclick = () => {
        fileExplorerTab.style.display = fileExplorerTab.style.display === 'none' ? 'flex' : 'none';
    };

    const navigationBtn = document.querySelector('.btn-navigatio button');
    navigationBtn.onclick = () => splitTab.click();

    const selectAllBtn = document.querySelector('.btn-select-all button');
    const selectNoneBtn = document.querySelector('.btn-select-none button');
    const selectInvertBtn = document.querySelector('.btn-select-invert button');
    const exploreritems = document.querySelectorAll('.explorer-container li');

    exploreritems.forEach(i => {
        i.onclick = () => {
            exploreritems.forEach(i => {
                i.classList.remove('selected');
            });
            i.classList.add('selected');
        }
    });

    selectAllBtn.onclick = () => {
        document.querySelectorAll('.explorer-container li').forEach(i => {
            i.classList.add('selected');
        });
    };
    selectNoneBtn.onclick = () => {
        document.querySelectorAll('.explorer-container li').forEach(i => {
            i.classList.remove('selected');
        });
    };
    selectInvertBtn.onclick = () => {
        exploreritems.forEach(i => {
            i.classList.toggle('selected');
        });
    };

    const layoutElement = document.querySelector('.aui-file-explorer-preview');
    const extraLargeBtn = document.querySelector('.section-content-column .btn-ex-icon button');
    const largeBtn = document.querySelector('.section-content-column .btn-l-icon button');
    const mediumBtn = document.querySelector('.section-content-column .btn-m-icon button');
    const smallBtn = document.querySelector('.section-content-column .btn-s-icon button');
    const detailBtn = document.querySelector('.section-content-column .btn-d-icon button');
    const tilesBtn = document.querySelector('.section-content-column .btn-t-icon button');
    const addModeToLayout = (cls, btn) => {
        [
            extraLargeBtn,
            largeBtn,
            mediumBtn,
            smallBtn,
            detailBtn,
            tilesBtn
        ].forEach(i => i.classList.remove('active'));

        btn.classList.add('active');

        layoutElement.classList.remove('extra-large');
        layoutElement.classList.remove('large');
        layoutElement.classList.remove('medium');
        layoutElement.classList.remove('small');
        layoutElement.classList.remove('details-vw');
        layoutElement.classList.remove('tiles');
        layoutElement.classList.add(cls);
    };

    extraLargeBtn.onclick = () => addModeToLayout('extra-large', extraLargeBtn);
    largeBtn.onclick = () => addModeToLayout('large', largeBtn);
    mediumBtn.onclick = () => addModeToLayout('medium', mediumBtn);
    smallBtn.onclick = () => addModeToLayout('small', smallBtn);
    detailBtn.onclick = () => addModeToLayout('details-vw', detailBtn);
    tilesBtn.onclick = () => addModeToLayout('tiles', tilesBtn);

    mediumBtn.click();

})(window, document);
