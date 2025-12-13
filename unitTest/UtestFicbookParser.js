
"use strict";

module("UtestFicbookParser");


QUnit.test("getChapterUrls", function (assert) {
    let done = assert.async(); 
    let dom = new DOMParser().parseFromString(FicbookSample, "text/html");
    return new FicbookParser().getChapterUrls(dom).then(
        function(chapters) {
            assert.equal(7, chapters.length);
            assert.equal("https://ficbook.net/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/38775520#part_content", chapters[0].sourceUrl);
            done();
        }
    );
});
QUnit.test("getAuthor", function (assert) {
    let dom = new DOMParser().parseFromString(FicbookSample, "text/html");
	let author = new FicbookParser().extractAuthor(dom)
	assert.equal("Katon only", author);
});
QUnit.test("getLanguage", function (assert) {
    let dom = new DOMParser().parseFromString(FicbookSample, "text/html");
	let lang = new FicbookParser().extractLanguage(dom)
	assert.equal("ru", lang);
});
QUnit.test("getDescription", function (assert) {
    let dom = new DOMParser().parseFromString(FicbookSample, "text/html");
	let description = new FicbookParser().extractDescription(dom)
	assert.equal("Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...", description);
});


const FicbookSample = 
`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...</title>

        <meta name="description" content="Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...">

        <!-- Apple Smart Banner -->
        <meta name="apple-itunes-app" content="app-id=6739503607, app-argument=com.breakpoint.ficbook://">

        <!-- Open Graph -->
        <meta property="og:title" content="Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...">
        <meta property="og:description" content="Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...">
                    <meta property="og:image" content="https://assets.teinon.net/assets/design/ogimage/socials_ru.png">
            <meta property="og:url" content="https://ficbook.net/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca">
        <meta property="og:site_name" content="Книга Фанфиков"/>

        <!-- Twitter -->
        <meta name="twitter:title" content="Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...">
        <meta name="twitter:description" content="Город без хозяев — фанфик по фэндому «Зайчик», автор Katon only, Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и ...">
                    <meta property="og:image" content="https://assets.teinon.net/assets/design/ogimage/socials_ru.png">
            <meta name="twitter:url" content="https://ficbook.net/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca">
        <meta name="twitter:site" content="@ficbooknet">
        <meta name="twitter:creator" content="@ficbooknet">

        <!-- Yandex -->
                    <meta property="yandex_recommendations_image" content="https://assets.teinon.net/assets/design/ogimage/socials_ru.png"/>
        
        
                <meta itemprop="inLanguage" content="ru-Latn"/>


            <link rel="canonical"
              href="https://ficbook.net/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca"/>
    
        <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "name": "Книга Фанфиков",
            "url": "https://ficbook.net"
        }
        </script>

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="apple-mobile-web-app-title" content="Книга Фанфиков">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="application-name" content="Книга Фанфиков">
        <meta name="theme-color" content="#542a00">
    
    <link rel="stylesheet" href="https://assets.teinon.net/assets/dist/static/css/app.863186d4.css">
    
                <script src="https://yandex.ru/ads/system/header-bidding.js"></script>
        <link rel="preconnect" href="https://ads.betweendigital.com" crossorigin>
        <script>window.yaContextCb = window.yaContextCb || []</script>
        <script src="https://cdn-rtb.sape.ru/js/uids.js"></script>
        <script async src="https://yandex.ru/ads/system/context.js"></script>
        <script async src="https://static.terratraf.com/engine/ssp/hb.js"></script>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <script src="https://content.adriver.ru/AdRiverFPS.js"></script>

                    <script async src="https://cdn.tds.bid/bid.js"></script>
            
    <script src="https://accounts.google.com/gsi/client" async></script>
</head>

<body>

    <age-verification-modal class="jsVueComponent" :is-visible="true"></age-verification-modal>

<div class="js-modal-destination"></div>

    <app-install-ads class="jsVueComponent"></app-install-ads>

    <wheel-of-fortune-modal class="jsVueComponent" :user-id="2797134"></wheel-of-fortune-modal>

<noindex>
    <script type="text/html" id="notificationsSubscribeModalTemplate">
    <div id="notificationsSubscribeModal" class="modal" tabindex="-1" role="dialog"
         aria-labelledby="notificationSubscribeModalLabel">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title"
                        id="notificationSubscribeModalLabel">Будьте в курсе событий</h4>
                </div>
                <div class="modal-body">
                    <p class="text-muted text-center">
                        Получайте пуш-оповещения, чтобы всегда знать о самых важных для Вас событиях.
                    </p>

                    <button type="button"
                            class="btn btn-primary btn-block js-enable-notifications mb-15">Получать</button>
                    <button type="button"
                            class="btn btn-link btn-block btn-small mb-15 js-maybe-later">Может, позже</button>
                </div>
            </div>
        </div>
    </div>
</script>


    <script>
        if ((localStorage.getItem('darkTheme') === null) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('darkTheme', 1);
        }

        if (+localStorage.getItem('darkTheme') === 1) {
            document.body.classList.add('dark-theme');
        }

        if (localStorage.getItem('showDesktopVersion')) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1100');
        }
    </script>
</noindex>


<div class="container">
    <div class="col-lg-16 main-container">
        <div class="book-container">
            <div class="header-top">
                <strong class="logo visible-xs">
                    <a href="/"><svg class="svg-icon logo_min "><use href="/assets/icons/icons-sprite7.svg#logo_min"></use></svg></a>
                </strong>

                <nav class="add-nav pull-left hidden-xs top-nav d-flex align-items-center gap-12">
                    <a href="/faq">FAQ</a>
                    <a href="/rules">Правила</a>
                    <span class="dark-theme-switcher js-dark-theme-switcher">
                        <svg class="svg-icon ic_dark-theme "><use href="/assets/icons/icons-sprite7.svg#ic_dark-theme"></use></svg>
                    </span>
                </nav>

                <noindex>
                                            <div class="header-info">
            <a href="/home/premium/coins"
            class="btn-on-book-background btn-on-book-background--premium hidden-xs">
            <svg class="svg-icon ic_crown "><use href="/assets/icons/icons-sprite7.svg#ic_crown"></use></svg>
            Улучшить аккаунт
        </a>
    
    <notifications-bell class="jsVueComponent notifications-row"
        :notification-counts-initial="{&quot;all&quot;:0,&quot;important&quot;:[]}"
        :new-news="1"
    ></notifications-bell>

    
    <div class="dropdown profile-holder">
        <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="text hidden-xs">Григорий Морозов</span>
            <div class=" avatar-decoration-holder">
    <div class="img-holder-universal avatar-40">
        <div class="avatar-cropper">
                                            <img alt="Григорий Морозов" src="https://assets.teinon.net/assets/design/default_avatar.png">
                                    </div>
    </div>
    </div>

            <svg class="svg-icon ic_arrow-right-3 arrow-down button-arrow"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
        </button>
        <div class="dropdown-menu profile-area" role="menu" aria-labelledby="dLabel">
            <ul class="list-unstyled">
                
                                    <li
                        class="premium-button webview-paid-content"
                                            >
                        <a href="/home/premium/coins">
                            <svg class="svg-icon ic_crown "><use href="/assets/icons/icons-sprite7.svg#ic_crown"></use></svg>
                                                            Улучшить аккаунт!
                                                    </a>
                    </li>
                    <li >
                        <a href="/home/news"><svg class="svg-icon ic_bullhorn "><use href="/assets/icons/icons-sprite7.svg#ic_bullhorn"></use></svg>Мои новости</a>
                    </li>
                    <li >
                        <a href="/authors/2797134"><svg class="svg-icon ic_user "><use href="/assets/icons/icons-sprite7.svg#ic_user"></use></svg>Мой профиль</a>
                    </li>
                    <li >
                        <a href="/home/messaging"><svg class="svg-icon ic_envelop "><use href="/assets/icons/icons-sprite7.svg#ic_envelop"></use></svg>Личные сообщения</a>
                    </li>
                    <li class="profileSlideDown">
                        <a class="category opener"><svg class="svg-icon ic_author "><use href="/assets/icons/icons-sprite7.svg#ic_author"></use></svg>Кабинет автора<span class="caret"></span></a>

                        <ul class="slide">
                            <li >
                                <a href="/home/addfic"><svg class="svg-icon ic_plus-circle "><use href="/assets/icons/icons-sprite7.svg#ic_plus-circle"></use></svg>Добавить фанфик</a>
                            </li>
                            <li >
                                <a href="/home/myfics"><svg class="svg-icon ic_category "><use href="/assets/icons/icons-sprite7.svg#ic_category"></use></svg>Мои фанфики</a>
                            </li>
                            <li >
                                <a href="/home/blog"><svg class="svg-icon ic_bubble-dark "><use href="/assets/icons/icons-sprite7.svg#ic_bubble-dark"></use></svg>Мой блог</a>
                            </li>
                            <li >
                                <a href="/home/comments"><svg class="svg-icon ic_comment "><use href="/assets/icons/icons-sprite7.svg#ic_comment"></use></svg>Отзывы</a>
                            </li>
                            <li >
                                <a href="/home/versions"><svg class="svg-icon ic_history "><use href="/assets/icons/icons-sprite7.svg#ic_history"></use></svg>История изменений</a>
                            </li>
                            <li >
                                <a href="/home/typos"><svg class="svg-icon ic_spell-check "><use href="/assets/icons/icons-sprite7.svg#ic_spell-check"></use></svg>Сообщения об ошибках</a>
                            </li>
                            <li >
                                <a href="/home/link_to_profile"><svg class="svg-icon ic_vcard "><use href="/assets/icons/icons-sprite7.svg#ic_vcard"></use></svg>Персональный баннер</a>
                            </li>
                        </ul>
                    </li>

                    <li class="profileSlideDown">
                        <a class="category opener"><svg class="svg-icon ic_book "><use href="/assets/icons/icons-sprite7.svg#ic_book"></use></svg>Кабинет читателя<span class="caret"></span></a>

                        <ul class="slide">
                            <li >
                                <a href="/home/collections"><svg class="svg-icon ic_category "><use href="/assets/icons/icons-sprite7.svg#ic_category"></use></svg>Сборники</a>
                            </li>
                            <li >
                                <a href="/home/bookmarks"><svg class="svg-icon ic_bookmark_plus "><use href="/assets/icons/icons-sprite7.svg#ic_bookmark_plus"></use></svg>Закладки</a>
                            </li>
                            <li >
                                <a href="/home/fallows"><svg class="svg-icon ic_comment "><use href="/assets/icons/icons-sprite7.svg#ic_comment"></use></svg>Обсуждения</a>
                            </li>
                            <li >
                                <a href="/home/favourites"><svg class="svg-icon ic_star-empty "><use href="/assets/icons/icons-sprite7.svg#ic_star-empty"></use></svg>Подписки на авторов</a>
                            </li>
                            <li >
                                <a href="/home/liked_fanfics"><svg class="svg-icon ic_thumbs-up "><use href="/assets/icons/icons-sprite7.svg#ic_thumbs-up"></use></svg>Понравившиеся работы</a>
                            </li>
                            <li >
                                <a href="/home/readedList"><svg class="svg-icon ic_bookmark "><use href="/assets/icons/icons-sprite7.svg#ic_bookmark"></use></svg>Прочитанные работы</a>
                            </li>
                            <li >
                                <a href="/home/followList"><svg class="svg-icon ic_star-empty "><use href="/assets/icons/icons-sprite7.svg#ic_star-empty"></use></svg>История подписок</a>
                            </li>
                            <li >
                                <a href="/home/visitedList"><svg class="svg-icon ic_file-check "><use href="/assets/icons/icons-sprite7.svg#ic_file-check"></use></svg> Просмотренные работы</a>
                            </li>
                            <li >
                                <a href="/home/feeds"><svg class="svg-icon ic_user "><use href="/assets/icons/icons-sprite7.svg#ic_user"></use></svg>Мои ленты</a>
                            </li>
                        </ul>
                    </li>

                    <li class="profileSlideDown">
                        <a class="category opener"><svg class="svg-icon ic_users "><use href="/assets/icons/icons-sprite7.svg#ic_users"></use></svg>Кабинет помощника<span class="caret"></span></a>

                        <ul class="slide">
                            <li >
                                <a href="/home/questionary/beta/show" title="Анкета помощника"><svg class="svg-icon ic_plus-circle "><use href="/assets/icons/icons-sprite7.svg#ic_plus-circle"></use></svg>Анкета помощника</a>
                            </li>

                            <li >
                                <a href="/home/roled_fics?role=coauthor"><svg class="svg-icon ic_file-text "><use href="/assets/icons/icons-sprite7.svg#ic_file-text"></use></svg>Фанфики помощника</a>
                            </li>
                        </ul>
                    </li>

                                                                <li class="webview-paid-content ">
                            <a href="/home/money?currentAmount=200">
                                <svg class="svg-icon ic_coins "><use href="/assets/icons/icons-sprite7.svg#ic_coins"></use></svg>Купить монеты
                                <span class="js-menu-synced-user-balance"></span>
                            </a>
                        </li>
                    
                    <li class="profileSlideDown">
                        <a class="category opener"><svg class="svg-icon ic_lamp "><use href="/assets/icons/icons-sprite7.svg#ic_lamp"></use></svg>Заявки<span class="caret"></span></a>

                        <ul class="slide">
                            <li >
                                <a href="/home/requests/add"><svg class="svg-icon ic_plus-circle "><use href="/assets/icons/icons-sprite7.svg#ic_plus-circle"></use></svg>Добавить заявку</a>
                            </li>
                            <li >
                                <a href="/home/my_requests"><svg class="svg-icon ic_lamp "><use href="/assets/icons/icons-sprite7.svg#ic_lamp"></use></svg>Мои заявки</a>
                            </li>
                            <li >
                                <a href="/home/my_requests_fanfics"><svg class="svg-icon ic_file-check "><use href="/assets/icons/icons-sprite7.svg#ic_file-check"></use></svg>Фанфики по моим заявкам</a>
                            </li>
                            <li >
                                <a href="/home/liked_requests"><svg class="svg-icon ic_lamp-full "><use href="/assets/icons/icons-sprite7.svg#ic_lamp-full"></use></svg>Интересные заявки</a>
                            </li>
                            <li >
                                <a href="/home/bookmarked_requests"><svg class="svg-icon ic_star-full "><use href="/assets/icons/icons-sprite7.svg#ic_star-full"></use></svg>Заявки в закладках</a>
                            </li>
                        </ul>
                    </li>
                    <li class="profileSlideDown">
                        <a class="category opener"><svg class="svg-icon ic_headset "><use href="/assets/icons/icons-sprite7.svg#ic_headset"></use></svg>Связь<span class="caret"></span></a>
                        <ul class="slide">
                            <li >
                                <a href="/home/support" title="Служба поддержки"><svg class="svg-icon ic_headset "><use href="/assets/icons/icons-sprite7.svg#ic_headset"></use></svg>Служба поддержки</a>
                            </li>
                            <li >
                                <a href="/sysmessages"><svg class="svg-icon ic_warning "><use href="/assets/icons/icons-sprite7.svg#ic_warning"></use></svg>Системные сообщения
                                </a>
                            </li>
                            <li >
                                <a href="/sitenews"><svg class="svg-icon ic_newspaper "><use href="/assets/icons/icons-sprite7.svg#ic_newspaper"></use></svg>Новости сайта
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li >
                        <a href="/home/settings"><svg class="svg-icon ic_cog "><use href="/assets/icons/icons-sprite7.svg#ic_cog"></use></svg>Настройки</a>
                    </li>
                                <li>
                    <a href="/logout" title="Выйти"><svg class="svg-icon ic_exit "><use href="/assets/icons/icons-sprite7.svg#ic_exit"></use></svg>Выйти</a>
                </li>
            </ul>
        </div>
    </div>
</div>

                                    </noindex>
            </div>

            <div class="book-inner">

                
                <div class="header-holder js-collapsible">
                    <div class="header-mobile">
                        <nav class="sub-nav">
                            <a href="/fanfiction">Фанфики</a>
                            <a href="/authors">Авторы</a>
                            <a href="/popular-fanfics-376846">Популярное</a>
                        </nav>
                        <button type="button" class="opener header-button">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-line"></span>
                            <span class="icon-line"></span>
                            <span class="icon-line"></span>
                        </button>
                    </div>
                    <div class="header-bottom">
                        <div class="flex-grow-1">
                            <strong class="logo hidden-xs">
                                <a href="/"><img src="https://assets.teinon.net/assets/design/logo.svg" width="208" height="43" alt="Книга Фанфиков"></a>
                            </strong>
                        </div>

                        
                        <header-search
                                class="jsVueComponent"
                                search-url="/search_fanfics"
                                :search-tabs-url="{&quot;fanfics&quot;:{&quot;title&quot;:&quot;\u0424\u0430\u043d\u0444\u0438\u043a\u0438&quot;,&quot;url&quot;:&quot;\/search_fanfics&quot;},&quot;fandoms&quot;:{&quot;title&quot;:&quot;\u0424\u044d\u043d\u0434\u043e\u043c\u044b&quot;,&quot;url&quot;:&quot;\/search_fandoms&quot;},&quot;users&quot;:{&quot;title&quot;:&quot;\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438&quot;,&quot;url&quot;:&quot;\/search_users&quot;},&quot;collections&quot;:{&quot;title&quot;:&quot;\u0421\u0431\u043e\u0440\u043d\u0438\u043a\u0438&quot;,&quot;url&quot;:&quot;\/search_collections&quot;},&quot;requests&quot;:{&quot;title&quot;:&quot;\u0417\u0430\u044f\u0432\u043a\u0438&quot;,&quot;url&quot;:&quot;\/search_requests&quot;}}"
                                :sections-link-data="{&quot;fanfics&quot;:{&quot;title&quot;:&quot;\u0424\u0430\u043d\u0444\u0438\u043a\u043e\u0432&quot;,&quot;url&quot;:&quot;\/find&quot;,&quot;icon&quot;:&quot;ic_edit&quot;},&quot;requests&quot;:{&quot;title&quot;:&quot;\u0417\u0430\u044f\u0432\u043e\u043a&quot;,&quot;url&quot;:&quot;\/requests&quot;,&quot;icon&quot;:&quot;ic_lamp&quot;},&quot;helpers&quot;:{&quot;title&quot;:&quot;\u0411\u0435\u0442\u044b \/ \u0413\u0430\u043c\u043c\u044b \/ \u0421\u043e\u0430\u0432\u0442\u043e\u0440\u0430&quot;,&quot;url&quot;:&quot;\/questionary\/beta\/search&quot;,&quot;icon&quot;:&quot;ic_users&quot;}}"
                                :random-link-data="{&quot;fanfics&quot;:{&quot;title&quot;:&quot;\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430&quot;,&quot;url&quot;:&quot;\/randomfic&quot;,&quot;icon&quot;:&quot;ic_book&quot;}}"
                        >
                        </header-search>
                    </div>

                    <nav class="navbar-default">
                        <div class="slide slide-xs-only">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <a href="/fanfiction">Фанфики</a>
                                </li>
                                <li >
                                    <a href="/authors">Авторы</a></li>
                                <li >
                                    <a href="/popular-fanfics-376846">Популярное</a>
                                </li>
                                <li >
                                    <a href="/requests">Заявки</a>
                                </li>
                                <li >
                                    <a href="/questionary/beta/search">Помощники</a>
                                </li>
                                <li >
                                    <a href="/competitions">
                                        Конкурсы
                                                                                                                    </a>
                                </li>
                                <li class="visible-xs"><a href="/faq">FAQ</a></li>
                                <li class="visible-xs"><a href="/rules">Правила</a></li>
                                <li class="visible-xs divider">
                                    <a href="#" class="js-dark-theme-switcher">
                                        <div class="d-flex align-items-center justify-content-center gap-4">
                                            <svg class="svg-icon ic_dark-theme "><use href="/assets/icons/icons-sprite7.svg#ic_dark-theme"></use></svg>
                                            <span class="css-is-light-theme">Сменить на тёмную тему</span>
                                            <span class="css-is-dark-theme">Сменить на светлую тему</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            <ul class="nav navbar-nav">
                                <li >
                                    <a href="/home/addfic" rel="nofollow"><svg class="svg-icon ic_add-work text-t2"><use href="/assets/icons/icons-sprite7.svg#ic_add-work"></use></svg> Добавить фанфик</a>
                                </li>
                                <li >
                                    <a href="/find" rel="nofollow"><svg class="svg-icon ic_search text-t2"><use href="/assets/icons/icons-sprite7.svg#ic_search"></use></svg> Поиск фанфиков</a>
                                </li>
                                <li>
                                    <a href="/randomfic" rel="nofollow"><svg class="svg-icon ic_dice text-t2"><use href="/assets/icons/icons-sprite7.svg#ic_dice"></use></svg> Случайная работа</a>
                                </li>
                                <li>
                                    <div class="social-top">
                                        
    <a href="https://t.me/ficbook_official" target="_blank" rel="nofollow"><svg class="svg-icon ic_telegram "><use href="/assets/icons/icons-sprite7.svg#ic_telegram"></use></svg></a>
    <a href="http://twitter.com/ficbooknet" target="_blank" rel="nofollow"><svg class="svg-icon ic_x "><use href="/assets/icons/icons-sprite7.svg#ic_x"></use></svg></a>
    <a href="http://vk.com/ficbooknet" target="_blank" rel="nofollow"><svg class="svg-icon ic_vk "><use href="/assets/icons/icons-sprite7.svg#ic_vk"></use></svg></a>
    <a href="https://www.youtube.com/channel/UCbtVE1EkJhiaeO1jD2P7lQg" target="_blank" rel="nofollow"><svg class="svg-icon ic_youtube "><use href="/assets/icons/icons-sprite7.svg#ic_youtube"></use></svg></a>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                                        
                    
                    <div class="fb-ads fb-ads-block d-flex mx-10 hidden-xs" data-place-id="all-pages-top"></div>
                </div>

                <main id="main" class="clearfix">
                    


                        

                        <div itemscope itemtype="https://schema.org/Book">
                    <link itemprop="bookFormat" href="https://schema.org/EBook">
        
        <div class="fb-ads fb-ads-block d-flex visible-xs ads-in-fic-hat" data-place-id="fanfic-page-hat-mobile"></div>

        <section class="chapter-info">
            <header class="d-flex flex-column gap-12 word-break">
                
                <div class="d-flex flex-column gap-8">
                    <div class="d-flex align-items-center gap-6">
                        <span class="text-muted">ID работы: 15237450</span>
                        <copy-button class="jsVueComponent" value-to-copy="15237450">
                            <template #button>
                                <svg class="svg-icon ic_copy mb-0 text-t2"><use href="/assets/icons/icons-sprite7.svg#ic_copy"></use></svg>
                            </template>
                        </copy-button>
                    </div>

                    <h1 class="heading" itemprop="name">Город без хозяев</h1>

                    
                    <section class="fanfic-badges">
                                                                            
    <div
        class="badge-with-icon direction small-direction-het
                "
        title="Гет — романтические и/или сексуальные отношения между мужчиной и женщиной."
    >
        <svg class="svg-icon ic_het "><use href="/assets/icons/icons-sprite7.svg#ic_het"></use></svg>

                    <span class="badge-text">Гет</span>
            </div>


                                                
                                                <div class="badge-with-icon badge-rating-NC-17">
                            <span class="badge-text">NC-17</span>
                        </div>

                                                                            <div class="badge-with-icon badge-secondary badge-status-in-progress">
                                <svg class="svg-icon ic_clock "><use href="/assets/icons/icons-sprite7.svg#ic_clock"></use></svg>
                                <span class="badge-text">В процессе</span>
                            </div>
                                                                        
                                                                            <div class="badge-with-icon badge-secondary badge-like">
                                <svg class="svg-icon ic_thumbs-up "><use href="/assets/icons/icons-sprite7.svg#ic_thumbs-up"></use></svg>
                                <span class="badge-text js-marks-plus">15</span>
                            </div>
                                            </section>

                                    </div>

                <section class="fanfic-hat">
                    <div class="fanfic-hat-body">
                        
                        
                        <section>
                            <div class="hat-creator-container">
    <div class=" avatar-decoration-holder">
    <div class="img-holder-universal avatar-40">
        <div class="avatar-cropper">
                            <a href="/authors/018d8407-ac29-71e7-a187-113574c1fc9b">                <img alt="" src="https://assets.teinon.net/assets/design/default_avatar.png">
                </a>                    </div>
    </div>
    </div>

    <div class="creator-info">
        <a href="/authors/018d8407-ac29-71e7-a187-113574c1fc9b"
            class="creator-username" itemprop="author">Katon only</a>
        <i class="small-text text-muted">автор</i>
    </div>
</div>




                        </section>

                        
                        <div>
                            <div class="description word-break">
                                                                
                                
                                                                                                                                                                                                                                                                                                                                                    <div class="mb-10">
                                        <strong>Фэндом:</strong>
                                        <div>
                                                                                            <a
                                                href="/fanfiction/games/tiny_bunny"
                                                class="js-open-notification-modal">Зайчик</a>                                                                                                                                                                                </div>
                                    </div>
                                
                                                                    <div class="mb-10">
                                        <strong>Пэйринг и персонажи:</strong>
                                        <div>
                                                                                                                                        <a href="/pairings/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2---%D0%9A%D0%B0%D1%82%D1%8F%20%D0%A1%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B2%D0%B0"
                                                   class="js-open-notification-modal                                               pairing-link pairing-highlight"
                                                >Антон Петров/Катя Смирнова</a>,                                                                                                                                        <a href="/pairings/%D0%90%D0%BD%D1%82%D0%BE%D0%BD%20%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2"
                                                   class="js-open-notification-modal pairing-link">Антон Петров</a>,                                                                                            <a href="/pairings/%D0%9A%D0%B0%D1%82%D1%8F%20%D0%A1%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B2%D0%B0"
                                                   class="js-open-notification-modal pairing-link">Катя Смирнова</a>,                                                                                            <a href="/pairings/%D0%A0%D0%BE%D0%BC%D0%B0%20%D0%9F%D1%8F%D1%82%D0%B8%D1%84%D0%B0%D0%BD"
                                                   class="js-open-notification-modal pairing-link">Рома Пятифан</a>,                                                                                            <a href="/pairings/%D0%91%D1%8F%D1%88%D0%B0"
                                                   class="js-open-notification-modal pairing-link">Бяша</a>                                                                                    </div>
                                    </div>
                                
                                <div class="mb-10">
                                    <strong>Размер:</strong>
                                    <div>
                                        планируется Миди, написано                                        34 страницы, 15 137 слов, 7 частей
                                    </div>
                                </div>

                                                                    <div class="mb-10">
                                        <strong>Жанры:</strong>
                                        <div class="tags">
                                            
    
            <a href="/tags/1683"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >AU</a>
    
    
            <a href="/tags/21"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Приключения</a>
    
    
            <a href="/tags/1664"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Романтика</a>
    
    
            <a href="/tags/1963"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Темное фэнтези</a>
    
    
            <a href="/tags/1669"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Фэнтези</a>
    
    
            <a href="/tags/1673"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Экшн</a>
    


                                        </div>
                                    </div>
                                                                    <div class="mb-10">
                                        <strong>Предупреждения:</strong>
                                        <div class="tags">
                                            
    
            <a href="/tags/1649"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                             tag-adult"
            >Насилие</a>
    
    
            <a href="/tags/1189"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Огнестрельное оружие</a>
    
    
            <a href="/tags/276"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                             tag-adult"
            >Рейтинг за лексику</a>
    
    
            <a href="/tags/277"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                             tag-adult"
            >Рейтинг за насилие и/или жестокость</a>
    
    
            <a href="/tags/278"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                             tag-adult"
            >Рейтинг за секс</a>
    
    
            <a href="/tags/1187"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Холодное оружие</a>
    


                                        </div>
                                    </div>
                                                                    <div class="mb-10">
                                        <strong>Другие метки:</strong>
                                        <div class="tags">
                                            
    
            <a href="/tags/924"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Артефакты</a>
    
    
            <a href="/tags/1419"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Магия</a>
    
    
            <a href="/tags/529"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Монстры</a>
    
    
            <a href="/tags/512"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Наемники</a>
    
    
            <a href="/tags/46"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Охотники на нечисть</a>
    
    
            <a href="/tags/1490"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Трудные отношения с родителями</a>
    
    
            <a href="/tags/1270"
           onclick="fym('reachGoal', 'click-tag'); return true;"
           class="tag
            js-open-notification-modal                                                            "
            >Эмоциональная одержимость</a>
    


                                        </div>
                                    </div>
                                
                                                                    <div class="mb-10">
                                        <strong>Описание:</strong>
                                        <div class="urlize-links js-public-beta-description text-preline" itemprop="description">Город в котором разбушевалась невиданная болезнь. Больные дичают и превращаются в свирепых чудовищ и на решение этой проблемы отправляют сильнейшую охотницу на монстров - Екатерину Смирнову. Но вестей от нее не приходит и в город отправляют группу охотников. 
Что же их там ждет ?</div>
                                    </div>
                                
                                
                                
                                
                                                                    <div class="mb-10">
                                        <strong>Публикация на других ресурсах:</strong>
                                        <div>
                                            Уточнять у автора / переводчика
                                        </div>
                                    </div>
                                                            </div>
                        </div>
                                            </div>

                    <section class="fanfic-author-actions" id="fanfic-author-actions">
                        
                                                    <div class="fanfic-author-actions__column">
                                <b>Поделиться:</b>
                                <share-block class="jsVueComponent" title="Читать произведение «Город без хозяев» автора Katon only на страницах Фикбука"></share-block>
                            </div>
                        
                                            </section>

                    <div class="hat-actions-container">
    <div class="d-flex flex-wrap justify-content-center gap-6">
                                                                                <span class="btn btn-with-description js-open-notification-modal js-like btn-primary"
                              data-fanfic-id="15237450"
                              onclick="fym('reachGoal', 'liked-fic-from-fic-header'); return true;">
                            <span class="main-info"><svg class="svg-icon ic_thumbs-up "><use href="/assets/icons/icons-sprite7.svg#ic_thumbs-up"></use></svg> <span class="js-marks-plus">15</span></span>
                            <span class="description">Нравится</span>
                        </span>
                                                
            <fanfic-follow-button class="jsVueComponent"
                :fanfic-id="15237450"
                :follow-count="15"
                :is-followed="false"
                :user-logged-in="true"
                :disabled="false"
            ></fanfic-follow-button>
        
                    <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/comments#comments-list"
               class="btn btn-primary btn-with-description"
               onclick="fym('reachGoal', 'opened-comments-list-from-fic-header'); return true;"
            >
                <span class="main-info">
                    <svg class="svg-icon ic_bubble-dark "><use href="/assets/icons/icons-sprite7.svg#ic_bubble-dark"></use></svg>
                    2
                </span>
                <span class="description">Отзывы</span>
            </a>
        
                                    <fanfic-collections-modal class="jsVueComponent"
                    :fanfic-id="15237450"
                    :initial-count-of-fanfic-collection="4"
                    ya-counter="opened-modal-to-add-fic-to-collection-from-fic-header"
                ></fanfic-collections-modal>
                    
                    <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/download" rel="nofollow"
               class="btn btn-primary btn-with-description"
               onclick="fym('reachGoal', 'opened-fic-download-page-from-fic-header'); return true;">
                <span class="main-info"><svg class="svg-icon ic_download "><use href="/assets/icons/icons-sprite7.svg#ic_download"></use></svg></span>
                <span class="description">Скачать</span>
            </a>
        
            </div>

            <fanfic-collections-link class="jsVueComponent"
            url="/collections/15237450/list"
            :initial-count="4"
            ya-counter="opened-collections-page-from-fic-header"
        ></fanfic-collections-link>
    </div>


                    <aside class="fanfic-hat-aside">
                        
                        <div id="rewards" class="fanfic-reward-container">
                            <strong>Награды от читателей:</strong>

                            <fanfic-reward-list class="jsVueComponent"
                                                            ></fanfic-reward-list>

                                                                                                <fanfic-reward-modal
                                        fanfic-title="Город без хозяев"
                                        :fanfic-id="15237450"
                                        :user-id="2797134"
                                        user-slug="2797134"
                                        user-name="Григорий Морозов"
                                        :initial-user-coin-balance="0"
                                        :reward-price="33"
                                                                                ya-counter="fic-award-from-fic-header"
                                        class="jsVueComponent btn-block justify-content-center"
                                    ></fanfic-reward-modal>
                                                                                    </div>

                        <div class="fb-ads fb-ads-block d-flex ads-in-fic-hat-desktop" data-place-id="fanfic-page-hat-desktop"></div>
                    </aside>
                </section>
            </header>

                <section class="d-flex flex-column gap-24">
        <script type="text/html" id="complainFanficModalTemplate">
    <div id="complainFanficModal" class="modal" tabindex="-1" role="dialog" aria-labelledby="complainFanficModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="complainFanficModalLabel"><a target="_blank"
                                                                             href="/rules">Сообщить о нарушении правил</a>
                    </h4>
                </div>
                <div class="modal-body">
                    <form>
                        
                        <div class="radio">
                            <label>
                                <input type="radio"
                                       name="reason"
                                       value="7">
                                Набросок из нескольких строк, еще не ставший полноценным произведением
                                <br>
                                <span class="text-muted small-text">
                                    Например, «тут будет первая часть» или «я пока не написала, я с телефона».
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio"
                                       name="reason"
                                       value="6">
                                Мнения о событиях или описания своей жизни, похожие на записи в личном дневнике
                                <br>
                                <span class="text-muted small-text">
                                    Не путать с «Мэри Сью» — они мало кому нравятся, но не нарушают правил.
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio"
                                       name="reason"
                                       value="4">
                                Конкурс, мероприятие, флешмоб, объявление, обращение к читателям
                                <br>
                                <span class="text-muted small-text">
                                    Все это автору следовало бы оставить для других мест.
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="5">
                                Подборка цитат, изречений, анекдотов, постов, логов, переводы песен
                                <br>
                                <span class="text-muted small-text">
                                    Текст состоит из скопированных кусков и не является фанфиком или статьей.
                                    <br>
                                    <b>Если текст содержит исследование, основанное на цитатах, то он не нарушает правил.</b>
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio"
                                       name="reason"
                                       value="3">
                                Текст не на русском языке
                                <br>
                                <span class="text-muted small-text">
                                    Вставки на иностранном языке допустимы.
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="1">
                                Намеренная провокация или оскорбление
                                <br>
                                <span class="text-muted small-text">
                                    Автор создал текст с целью потроллить читателей. Не путать со стёбом или пародией.
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="2">
                                Плагиат
                                <br>
                                <span class="text-muted small-text">
                                    Пользователь, опубликовавший работу, не является настоящим ее автором или переводчиком.
                                </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_fanfic_proof">
                                <b class="text-danger">
                                    Плагиатом считается копирование текста и выдача его за свой. Если у вас украли идею или персонажей - не стоит слать жалобу, мы не сможем вам помочь. В этом случае обращайтесь к автору напрямую.
                                </b>
                                <br/>
                                Пожалуйста, приведите ссылку, которая могла бы подтвердить настоящее авторство, и пояснения, почему вы считаете данную работу плагиатом:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-2" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="13">
                                Список признаков или причин, плюсы и минусы, анкета персонажей
                                <br>
                                <span class="text-muted small-text">
                                    Перечисление чего-либо не является полноценным фанфиком, ориджиналом или статьей.
                                </span>
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="15">
                                Часть работы со ссылкой на продолжение на другом сайте
                                <br>
                                <span class="text-muted small-text">
                                    Пример: Вот первая глава, остальное читайте по ссылке...
                                </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_fic_link_proof">
                                Пожалуйста, приведите часть текста и ссылку, чтобы мы могли провести соответствующую проверку:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-15" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>
                        
                        <div class="radio">
                            <label>
                                <input type="radio"
                                       name="reason"
                                       value="18">
                                Тексты с участием персонажей, не достигших возраста согласия.
                                <br>
                                <span class="text-muted small-text">
                                   В сексуального характера сценах не могут быть задействованы персонажи, не достигшие возраста согласия.
                                </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_age_of_consent_proof">
                                Пожалуйста, приведите пример из текста доказывающий нарушение:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-18" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="19">
                                Работа затрагивает недавние мировые трагедии или политические конфликты
                                <br>
                                <span class="text-muted small-text">
                                    Неважно, с какой именно целью написана работа - не стоит использовать недавние события-трагедии для создания своих работ.
                                </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_tragedy_proof">
                                Пожалуйста, приведите пояснения и часть текста, где затрагиваются те или иные события:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-19" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="20">
                                Переводы без разрешения, машинные переводы
                                <br>
                                <span class="text-muted small-text">
                                На сайте допускается публиковать только переводы с иностранного языка, которые были выполнены самостоятельно, с разрешения автора оригинала.
                            </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_translations_proof">
                                Пожалуйста, приведите пояснения, почему вы считаете, что данный перевод является машинным и/или публикуется без разрешения автора оригинала:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-20" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="21">
                                Работа дубликат
                                <br/>
                                <span class="text-muted small-text">
                                    Публикация одного и того же текста (например: два соавтора выложили одну и ту же работу, каждый со своего профиля; автор выложил один и тот же текст в своем профиле два раза).
                                </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_duplicate_proof">
                                Пожалуйста, приведите часть текста и ссылку, чтобы мы могли провести соответствующую проверку:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-21" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>

                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="22">
                                Не указаны важные метки
                                <br/>
                                <span class="text-muted small-text">
                                        Например, в работе описывается изнасилование, но в шапке не указана метка &quot;Изнасилование&quot;.
                                    </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_lgbt_tags_1">
                                Пожалуйста, приведите пример из текста доказывающий нарушение:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-22" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>

                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="23">
                                Указаны метки, которые не имеют отношения к работе
                                <br/>
                                <span class="text-muted small-text">
                                        Например, работа не содержит сцен сексуального характера, но в шапке указана метка &quot;Рейтинг за секс&quot;.
                                    </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_lgbt_tags_2">
                                Пожалуйста, приведите пример из текста доказывающий нарушение:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-23" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>

                        <div class="radio">
                            <label>
                                <input type="radio" name="reason" value="24">
                                Некорректная направленность
                                <br/>
                                    <span class="text-muted small-text">
                                        Например, &quot;Джен&quot; вместо &quot;Слэша&quot;
                                    </span>
                            </label>

                            <div style="display: none;" class="well well-sm" id="complain_lgbt_directions">
                                Пожалуйста, приведите пример из текста доказывающий нарушение:
                                <br/>
                                <textarea class="form-control js-complain-fanfic-proof-24" rows="3" maxlength="10000"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                    <button type="button"
                            class="btn btn-primary jsFanficComplain">Отправить сообщение администрации</button>
                </div>
            </div>
        </div>
    </div>
</script>


        
                <article id="part_content" class="article">
            
                                    <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/38775520#part_content" class="visible-xs-block start-reading"
                       onclick="fym('reachGoal','start-read-fic-from-table-of-content'); return true;">
                        Начать читать
                        <svg class="svg-icon ic_arrow-right-3 "><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                    </a>
                
                <div class="title-area text-center">
                    <h2 class="text-t1 text-bold">Содержание</h2>
                </div>

                
                <div class="fb-ads fb-ads-block d-flex " data-place-id="fanfic-table-of-content-middle"></div>

                <ul class="list-unstyled list-of-fanfic-parts clearfix">
                                                                        <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/38775520#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>Дорога, темнота и клыки</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="31 декабря 2024 г., 20:28">31 декабря 2024 г., 20:28</span>
                                                                                                                </div>
                            </li>
                                                                                                <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/38978016#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>Улыбка</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="28 января 2025 г., 22:39">28 января 2025 г., 22:39</span>
                                                                                                                            |
                                            <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/38978016#comments">Отзывы: 1</a>
                                                                        </div>
                            </li>
                                                                                                <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/39208958#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>Скатерть-самобранка</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="10 марта 2025 г., 17:42">10 марта 2025 г., 17:42</span>
                                                                                                                            |
                                            <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/39208958#comments">Отзывы: 1</a>
                                                                        </div>
                            </li>
                                                                                                <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/39476603#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>Fast &amp; furious</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="30 марта 2025 г., 22:32">30 марта 2025 г., 22:32</span>
                                                                                                                </div>
                            </li>
                                                                                                <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/39591224#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>Эсмеральда</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="19 апреля 2025 г., 07:39">19 апреля 2025 г., 07:39</span>
                                                                                                                </div>
                            </li>
                                                                                                <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/40219163#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>1,2</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="28 июля 2025 г., 17:33">28 июля 2025 г., 17:33</span>
                                                                                                                </div>
                            </li>
                                                                                                <li class="part">
                                <a href="/readfic/01936843-a50c-782c-9de9-cbcbdd6fdcca/40240430#part_content"
                                   class="part-link ">
                                    <div class="part-title word-break">
                                        <h3>Там где не ждали</h3>
                                                                            </div>
                                    <svg class="svg-icon ic_arrow-right-3 next-part-arrow visited"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-3"></use></svg>
                                </a>
                                <div class="part-info">
                                                                                    <span title="17 августа 2025 г., 20:38">17 августа 2025 г., 20:38</span>
                                                                                                                </div>
                            </li>
                                            
                    
                                    </ul>
                    </article>

            </section>
        </section>
    </div>

                                            <div class="fb-ads fb-ads-block d-flex mx-10" data-place-id="all-pages-bottom"></div>
                                    </main>
            </div>

            <footer class="page-footer" id="footer">
    <section class="page-footer-links">
        <div class="links-col">
            <a href="/sitenews">Новости сайта</a>
            <a href="/faq">FAQ</a>
            <a href="/rules">Правила</a>
            <a href="/knowledgebase">База знаний</a>
            <a href="/support" rel="nofollow">Служба поддержки</a>
        </div>
        <div class="links-col">
            <a href="/mission">Миссия сайта</a>
            <a href="/rkl/offer-static">Реклама на сайте</a>
            <a href="/info">Юридическая информация</a>
            <a href="/agreement">Пользовательское соглашение</a>
            <a href="/privacy">Политика обработки персональных данных</a>
        </div>
    </section>

           <section class="page-footer-apps">
            Официальное приложение
            <div class="d-flex gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.breakpoint.ficbook" target="_blank" rel="nofollow">
                    <img
                        src="https://assets.teinon.net/assets/design/app-promo/get-it-on-google-play.svg"
                        alt="Скачать в Google Play"
                        height="43"
                    >
                </a>
                <a href="https://apps.apple.com/us/app/%D1%84%D0%B8%D0%BA%D0%B1%D1%83%D0%BA/id6739503607" target="_blank" rel="nofollow">
                    <img
                        src="https://assets.teinon.net/assets/design/app-promo/app-store-badge.svg"
                        alt="Скачать в App Store"
                        height="43"
                    >
                </a>
            </div>
        </section>
    
    <section class="page-footer-social">
        
    <a href="https://t.me/ficbook_official" target="_blank" rel="nofollow"><svg class="svg-icon ic_telegram "><use href="/assets/icons/icons-sprite7.svg#ic_telegram"></use></svg></a>
    <a href="http://twitter.com/ficbooknet" target="_blank" rel="nofollow"><svg class="svg-icon ic_x "><use href="/assets/icons/icons-sprite7.svg#ic_x"></use></svg></a>
    <a href="http://vk.com/ficbooknet" target="_blank" rel="nofollow"><svg class="svg-icon ic_vk "><use href="/assets/icons/icons-sprite7.svg#ic_vk"></use></svg></a>
    <a href="https://www.youtube.com/channel/UCbtVE1EkJhiaeO1jD2P7lQg" target="_blank" rel="nofollow"><svg class="svg-icon ic_youtube "><use href="/assets/icons/icons-sprite7.svg#ic_youtube"></use></svg></a>

    </section>

    <section class="page-footer-buttons">
        <button type="button" class="js-dark-theme-switcher btn-footer btn-unstyled d-flex align-items-center justify-content-center gap-8">
            <svg class="svg-icon ic_dark-theme "><use href="/assets/icons/icons-sprite7.svg#ic_dark-theme"></use></svg>
            <span class="css-is-light-theme">Тёмная тема</span>
            <span class="css-is-dark-theme">Светлая тема</span>
        </button>
        <button type="button" id="js-switchToMobileVersion" class="device-view-switcher btn-footer btn-unstyled d-none">
            <svg class="svg-icon ic_mobile "><use href="/assets/icons/icons-sprite7.svg#ic_mobile"></use></svg>
            Мобильная
        </button>
        <button type="button" id="js-switchToDesktopVersion" class="device-view-switcher btn-footer btn-unstyled hidden-sm hidden-md hidden-lg">
            <svg class="svg-icon ic_desktop "><use href="/assets/icons/icons-sprite7.svg#ic_desktop"></use></svg>
            Полная версия
        </button>
    </section>

    <section class="page-footer-payments">
        <img src="https://assets.teinon.net/assets/design/payment_icons/payments-dark-bg.png" alt="Способы оплаты" height="28">
    </section>

    <section class="page-footer-copyright">
        <span>© 2009-2025 Книга Фанфиков</span>
        <a href="mailto:support@ficbook.net">support@ficbook.net</a>
        <a href="#" class="js-show-corner-cat page-footer__copyright-paw"><svg class="svg-icon ic_paw "><use href="/assets/icons/icons-sprite7.svg#ic_paw"></use></svg></a>
    </section>

    <section class="page-footer-disclaimer">
        Права на все произведения, опубликованные на сайте, принадлежат авторам произведений. Администрация не несет ответственности за содержание работ.
    </section>

    <section class="page-footer-projects">
        <a href="https://fic.fan" title="FicFan - Fanfics in English">
            Fanfics in English
            <img src="https://assets.teinon.net/assets/design/logo/logo_en.svg" alt="FicFan - Fanfics in English" height="24">
        </a>
        <a href="https://fanfictionero.com" title="Fanfictionero - Fanfics en Español">
            Fanfics en Español
            <img src="https://assets.teinon.net/assets/design/logo/logo_es.svg" alt="Fanfictionero - Fanfics en Español" height="24">
        </a>
        <a href="https://ficador.com" title="Ficador - Fanfics em Português">
            Fanfics em Português
            <img src="https://assets.teinon.net/assets/design/logo/logo_pt.svg" alt="Ficador - Fanfics em Português" height="24">
        </a>
    </section>
</footer>

        </div>
    </div>
</div>

<section class="sticky-bottom-block">
    <div class="fb-ads fb-ads-block d-flex small-ad" data-place-id="all-pages-sticky-bottom"></div>

    
    
            <fake-create-bookmark-button class="jsVueComponent"></fake-create-bookmark-button>
    
            <fanfic-text-menu class="jsVueComponent"
            :fanfic-id="15237450"
                        :saved-bookmark="null"
            :is-public-beta-enabled-for-fanfic="true"
            :is-blacklist="false"
            :typo-areas="{&quot;.js-public-beta-text&quot;:1,&quot;.js-public-beta-description&quot;:2,&quot;.js-public-beta-author-comment&quot;:3,&quot;.js-public-beta-dedication&quot;:4,&quot;.js-public-beta-comment-before&quot;:5,&quot;.js-public-beta-comment-after&quot;:6}"
        ></fanfic-text-menu>
    
    <span id="toTop"><svg class="svg-icon ic_arrow-right-2 arrow-up"><use href="/assets/icons/icons-sprite7.svg#ic_arrow-right-2"></use></svg></span>

    </section>

<div id="cornerCat" class="hidden"></div>

<div class="fb-ads fb-ads-block d-flex desktop-ad-stick-to-left" data-place-id="all-pages-sticky-left"></div>


        <div class="modal fade get-premium-modal" id="getPremiumModal" tabindex="-1" role="dialog"
         aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    <h3>Улучшить аккаунт</h3>
                    <p class="text-muted small-text">
                        Эта функция доступна только для пользователей улучшенного аккаунта.
                    </p>
                    <div class="text-center curious-cat">
                        <a href="/home/premium/subscriptions" class="ds-btn ds-btn-primary">
                            <svg class="svg-icon ic_crown "><use href="/assets/icons/icons-sprite7.svg#ic_crown"></use></svg> Улучшить!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://assets.teinon.net/assets/dist/static/js/advertisement.707bbbae.js"></script>

<script>
    window.ficbook = {
                isProd: true,
        turnstile_key: "0x4AAAAAAABWKdpSVS5d2TBQ",
        statisticsApiUrl: "/srv/statistics/store",
        userInfo: {
            slug: '2797134',
            isLoggedIn: true,
            isPremium: false,
            isModerator: false,
            balance: 0,
        },
    };
</script>
<script src="https://assets.teinon.net/assets/dist/static/js/app.5faa6949.js"></script>

    <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/service-worker.js');
            });
        }
    </script>

    <script>
        var r = (Math.random() * 10000000000).toFixed(0);
        var s = document.createElement('script');
        s.src = "//ads.betweendigital.com/sspmatch-js?p=42573&randsalt="+r;
        s.async = true;
        document.body.appendChild(s);

        try {
            advertisement.init(true, 'adfox', false);
        } catch (error) {
            console.error('AD block crash: ', error);
        }
    </script>

        

    <script>
        ficbookApp.fanficRead.base();
    </script>


    <script>
                    try {
                advertisement.createTextAds('content', 'fanfic-text-repeat');
            } catch (error) {
                console.error('AD block crash: ', error);
            }
        
        const textFootnotes = [];
        ficbookApp.fanficRead.text(textFootnotes);
        
            </script>

            <script>
            
            Statistics.storeRef(
                15237450,
                0,
                'user'            );

                    </script>
    
    <!-- /Yandex.Metrika counter -->
    <script>
        try {
            (function (m, e, t, r, i, k, a) {
                m[i] = m[i] || function () {
                    (m[i].a = m[i].a || []).push(arguments)
                };
                m[i].l = 1 * new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {return;}
                }
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
            (window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");

            var yaParams = {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                userParams: {
                    is_authorized: true                },
                params: {
                    app_webview: false,
                    is_adult_fanfic: 'is-adult',
                    is_authorized_visit: true,
                                        fanfic_tags: ['Приключения','Охотники на нечисть','Рейтинг за лексику','Рейтинг за насилие и/или жестокость','Рейтинг за секс','Наемники','Монстры','Артефакты','Холодное оружие','Огнестрельное оружие','Эмоциональная одержимость','Магия','Трудные отношения с родителями','Насилие','Романтика','Фэнтези','Экшн','AU','Темное фэнтези',],
                                                            fanfic_fandoms: ['Зайчик',]
                                    }
            };

            window.fym = (method, params) => ym(199955, method, params);

            fym("init", yaParams);
        } catch (e) {
        }
    </script>

    <noscript><div><img src="https://mc.yandex.ru/watch/199955" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- Yandex.Metrika -->


<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ad1fdee7f4ede14',t:'MTc2NTU5MjUyNw=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>

`;
