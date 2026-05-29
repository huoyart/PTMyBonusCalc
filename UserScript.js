// ==UserScript==
// @name         PT站点魔力计算器
// @namespace    https://github.com/neoblackxt/PTMyBonusCalc
// @version      2.3.0
// @description  在使用NexusPHP架构的PT站点显示每个种子的A值和每GB的A值。
// @author       neoblackxt, LaneLau
// @require      https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js
// @match        *://kp.m-team.cc/*
// @match        *://zp.m-team.io/*
// @match        *://13city.org/torrents*
// @match        *://*.13city.org/torrents*
// @match        *://1ptba.com/torrents*
// @match        *://*.1ptba.com/torrents*
// @match        *://52movie.top/torrents*
// @match        *://*.52movie.top/torrents*
// @match        *://52pt.site/torrents*
// @match        *://*.52pt.site/torrents*
// @match        *://aither.cc/torrents*
// @match        *://*.aither.cc/torrents*
// @match        *://alpharatio.cc/torrents*
// @match        *://*.alpharatio.cc/torrents*
// @match        *://animez.to/torrents*
// @match        *://*.animez.to/torrents*
// @match        *://anthelion.me/torrents*
// @match        *://*.anthelion.me/torrents*
// @match        *://audiences.me/torrents*
// @match        *://*.audiences.me/torrents*
// @match        *://audiences.me/mybonus*
// @match        *://*.audiences.me/mybonus*
// @match        *://azusa.wiki/torrents*
// @match        *://*.azusa.wiki/torrents*
// @match        *://beyond-hd.me/torrents*
// @match        *://*.beyond-hd.me/torrents*
// @match        *://bilibili.download/torrents*
// @match        *://*.bilibili.download/torrents*
// @match        *://bitporn.eu/torrents*
// @match        *://*.bitporn.eu/torrents*
// @match        *://brokenstones.is/torrents*
// @match        *://*.brokenstones.is/torrents*
// @match        *://cangbao.ge/torrents*
// @match        *://*.cangbao.ge/torrents*
// @match        *://carpt.net/torrents*
// @match        *://*.carpt.net/torrents*
// @match        *://clearjav.com/torrents*
// @match        *://*.clearjav.com/torrents*
// @match        *://crabpt.vip/torrents*
// @match        *://*.crabpt.vip/torrents*
// @match        *://cspt.top/torrents*
// @match        *://*.cspt.top/torrents*
// @match        *://cyanbug.net/torrents*
// @match        *://*.cyanbug.net/torrents*
// @match        *://dicmusic.com/torrents*
// @match        *://*.dicmusic.com/torrents*
// @match        *://discfan.net/torrents*
// @match        *://*.discfan.net/torrents*
// @match        *://dragonhd.xyz/torrents*
// @match        *://*.dragonhd.xyz/torrents*
// @match        *://dstudio.me/torrents*
// @match        *://*.dstudio.me/torrents*
// @match        *://dubhe.site/torrents*
// @match        *://*.dubhe.site/torrents*
// @match        *://duckboobee.org/torrents*
// @match        *://*.duckboobee.org/torrents*
// @match        *://empornium.sx/torrents*
// @match        *://*.empornium.sx/torrents*
// @match        *://et8.org/torrents*
// @match        *://*.et8.org/torrents*
// @match        *://exoticaz.to/torrents*
// @match        *://*.exoticaz.to/torrents*
// @match        *://fappaizuri.me/torrents*
// @match        *://*.fappaizuri.me/torrents*
// @match        *://fearnopeer.com/torrents*
// @match        *://*.fearnopeer.com/torrents*
// @match        *://filelist.io/torrents*
// @match        *://*.filelist.io/torrents*
// @match        *://gamegamept.com/torrents*
// @match        *://*.gamegamept.com/torrents*
// @match        *://generation-free.org/torrents*
// @match        *://*.generation-free.org/torrents*
// @match        *://greatposterwall.com/torrents*
// @match        *://*.greatposterwall.com/torrents*
// @match        *://haidan.cc/torrents*
// @match        *://*.haidan.cc/torrents*
// @match        *://happyfappy.net/torrents*
// @match        *://*.happyfappy.net/torrents*
// @match        *://hawke.uno/torrents*
// @match        *://*.hawke.uno/torrents*
// @match        *://hdarea.club/torrents*
// @match        *://*.hdarea.club/torrents*
// @match        *://hdarea.club/mybonus*
// @match        *://*.hdarea.club/mybonus*
// @match        *://hdbao.cc/torrents*
// @match        *://*.hdbao.cc/torrents*
// @match        *://hdcity.city/torrents*
// @match        *://*.hdcity.city/torrents*
// @match        *://hddolby.com/torrents*
// @match        *://*.hddolby.com/torrents*
// @match        *://hdfans.org/torrents*
// @match        *://*.hdfans.org/torrents*
// @match        *://hdhome.org/torrents*
// @match        *://*.hdhome.org/torrents*
// @match        *://hdkyl.in/torrents*
// @match        *://*.hdkyl.in/torrents*
// @match        *://hdsky.me/torrents*
// @match        *://*.hdsky.me/torrents*
// @match        *://hdtime.org/torrents*
// @match        *://*.hdtime.org/torrents*
// @match        *://hd-torrents.org/torrents*
// @match        *://*.hd-torrents.org/torrents*
// @match        *://hdvideo.top/torrents*
// @match        *://*.hdvideo.top/torrents*
// @match        *://hhanclub.net/torrents*
// @match        *://*.hhanclub.net/torrents*
// @match        *://hhanclub.net/mybonus*
// @match        *://*.hhanclub.net/mybonus*
// @match        *://hitpt.com/torrents*
// @match        *://*.hitpt.com/torrents*
// @match        *://htpt.cc/torrents*
// @match        *://*.htpt.cc/torrents*
// @match        *://hxpt.org/torrents*
// @match        *://*.hxpt.org/torrents*
// @match        *://iptorrents.com/torrents*
// @match        *://*.iptorrents.com/torrents*
// @match        *://jpopsuki.eu/torrents*
// @match        *://*.jpopsuki.eu/torrents*
// @match        *://kamept.com/torrents*
// @match        *://*.kamept.com/torrents*
// @match        *://kp.m-team.cc/torrents*
// @match        *://*.kp.m-team.cc/torrents*
// @match        *://kufei.org/torrents*
// @match        *://*.kufei.org/torrents*
// @match        *://lemonhd.net/torrents*
// @match        *://*.lemonhd.net/torrents*
// @match        *://longpt.org/torrents*
// @match        *://*.longpt.org/torrents*
// @match        *://lst.gg/torrents*
// @match        *://*.lst.gg/torrents*
// @match        *://milkie.cc/torrents*
// @match        *://*.milkie.cc/torrents*
// @match        *://momentpt.top/torrents*
// @match        *://*.momentpt.top/torrents*
// @match        *://monikadesign.uk/torrents*
// @match        *://*.monikadesign.uk/torrents*
// @match        *://morethantv.me/torrents*
// @match        *://*.morethantv.me/torrents*
// @match        *://mua.xloli.cc/torrents*
// @match        *://*.mua.xloli.cc/torrents*
// @match        *://musopia.vip/torrents*
// @match        *://*.musopia.vip/torrents*
// @match        *://myanonamouse.net/torrents*
// @match        *://*.myanonamouse.net/torrents*
// @match        *://nanyangpt.com/torrents*
// @match        *://*.nanyangpt.com/torrents*
// @match        *://nebulance.io/torrents*
// @match        *://*.nebulance.io/torrents*
// @match        *://nicept.net/torrents*
// @match        *://*.nicept.net/torrents*
// @match        *://njtupt.top/torrents*
// @match        *://*.njtupt.top/torrents*
// @match        *://okpt.net/torrents*
// @match        *://*.okpt.net/torrents*
// @match        *://open.cd/torrents*
// @match        *://*.open.cd/torrents*
// @match        *://orpheus.network/torrents*
// @match        *://*.orpheus.network/torrents*
// @match        *://our.kelu.one/torrents*
// @match        *://*.our.kelu.one/torrents*
// @match        *://ourbits.club/torrents*
// @match        *://*.ourbits.club/torrents*
// @match        *://p.t-baozi.cc/torrents*
// @match        *://*.p.t-baozi.cc/torrents*
// @match        *://pandapt.net/torrents*
// @match        *://*.pandapt.net/torrents*
// @match        *://piggo.me/torrents*
// @match        *://*.piggo.me/torrents*
// @match        *://playlet.cc/torrents*
// @match        *://*.playlet.cc/torrents*
// @match        *://pt.0ff.cc/torrents*
// @match        *://*.pt.0ff.cc/torrents*
// @match        *://pt.agsvpt.cn/torrents*
// @match        *://*.pt.agsvpt.cn/torrents*
// @match        *://agsvpt.com/torrents*
// @match        *://*.agsvpt.com/torrents*
// @match        *://pt.aling.de/torrents*
// @match        *://*.pt.aling.de/torrents*
// @match        *://pt.btschool.club/torrents*
// @match        *://*.pt.btschool.club/torrents*
// @match        *://pt.cdy.skin/torrents*
// @match        *://*.pt.cdy.skin/torrents*
// @match        *://pt.eastgame.org/torrents*
// @match        *://*.pt.eastgame.org/torrents*
// @match        *://pt.gtkpw.xyz/torrents*
// @match        *://*.pt.gtkpw.xyz/torrents*
// @match        *://pt.hdclone.top/torrents*
// @match        *://*.pt.hdclone.top/torrents*
// @match        *://pt.hdupt.com/torrents*
// @match        *://*.pt.hdupt.com/torrents*
// @match        *://pt.itzmx.com/torrents*
// @match        *://*.pt.itzmx.com/torrents*
// @match        *://pt.keepfrds.com/torrents*
// @match        *://*.pt.keepfrds.com/torrents*
// @match        *://pt.lajidui.top/torrents*
// @match        *://*.pt.lajidui.top/torrents*
// @match        *://pt.luckpt.de/torrents*
// @match        *://*.pt.luckpt.de/torrents*
// @match        *://pt.muxuege.org/torrents*
// @match        *://*.pt.muxuege.org/torrents*
// @match        *://pt.mypt.cc/torrents*
// @match        *://*.pt.mypt.cc/torrents*
// @match        *://pt.sjtu.edu.cn/torrents*
// @match        *://*.pt.sjtu.edu.cn/torrents*
// @match        *://pt.soulvoice.club/torrents*
// @match        *://*.pt.soulvoice.club/torrents*
// @match        *://pt.tey.cc/torrents*
// @match        *://*.pt.tey.cc/torrents*
// @match        *://pt.tu88.men/torrents*
// @match        *://*.pt.tu88.men/torrents*
// @match        *://pt.xingyungept.org/torrents*
// @match        *://*.pt.xingyungept.org/torrents*
// @match        *://pt.ying.us.kg/torrents*
// @match        *://*.pt.ying.us.kg/torrents*
// @match        *://ptcafe.club/torrents*
// @match        *://*.ptcafe.club/torrents*
// @match        *://ptchdbits.co/torrents*
// @match        *://*.ptchdbits.co/torrents*
// @match        *://pterclub.net/torrents*
// @match        *://*.pterclub.net/torrents*
// @match        *://ptfans.cc/torrents*
// @match        *://*.ptfans.cc/torrents*
// @match        *://pthome.net/torrents*
// @match        *://*.pthome.net/torrents*
// @match        *://ptlao.top/torrents*
// @match        *://*.ptlao.top/torrents*
// @match        *://ptlgs.org/torrents*
// @match        *://*.ptlgs.org/torrents*
// @match        *://ptsbao.club/torrents*
// @match        *://*.ptsbao.club/torrents*
// @match        *://ptskit.org/torrents*
// @match        *://*.ptskit.org/torrents*
// @match        *://pttime.org/torrents*
// @match        *://*.pttime.org/torrents*
// @match        *://ptzone.xyz/torrents*
// @match        *://*.ptzone.xyz/torrents*
// @match        *://qingwapt.com/torrents*
// @match        *://*.qingwapt.com/torrents*
// @match        *://qingwapt.com/mybonus*
// @match        *://*.qingwapt.com/mybonus*
// @match        *://raingfh.top/torrents*
// @match        *://*.raingfh.top/torrents*
// @match        *://rousi.pro/torrents*
// @match        *://*.rousi.pro/torrents*
// @match        *://sbpt.link/torrents*
// @match        *://*.sbpt.link/torrents*
// @match        *://sewerpt.com/torrents*
// @match        *://*.sewerpt.com/torrents*
// @match        *://si-qi.xyz/torrents*
// @match        *://*.si-qi.xyz/torrents*
// @match        *://sportscult.org/torrents*
// @match        *://*.sportscult.org/torrents*
// @match        *://springsunday.net/torrents*
// @match        *://*.springsunday.net/torrents*
// @match        *://star-space.net/torrents*
// @match        *://*.star-space.net/torrents*
// @match        *://sunnypt.top/torrents*
// @match        *://*.sunnypt.top/torrents*
// @match        *://tangpt.top/torrents*
// @match        *://*.tangpt.top/torrents*
// @match        *://tjupt.org/torrents*
// @match        *://*.tjupt.org/torrents*
// @match        *://tokyo-manga.top/torrents*
// @match        *://*.tokyo-manga.top/torrents*
// @match        *://torrentleech.cc/torrents*
// @match        *://*.torrentleech.cc/torrents*
// @match        *://totheglory.im/torrents*
// @match        *://*.totheglory.im/torrents*
// @match        *://tracker.novahd.top/torrents*
// @match        *://*.tracker.novahd.top/torrents*
// @match        *://u2.dmhy.org/torrents*
// @match        *://*.u2.dmhy.org/torrents*
// @match        *://ubits.club/torrents*
// @match        *://*.ubits.club/torrents*
// @match        *://ultrahd.net/torrents*
// @match        *://*.ultrahd.net/torrents*
// @match        *://web.yemapt.org/torrents*
// @match        *://*.web.yemapt.org/torrents*
// @match        *://wintersakura.net/torrents*
// @match        *://*.wintersakura.net/torrents*
// @match        *://xingtan.one/torrents*
// @match        *://*.xingtan.one/torrents*
// @match        *://xingwan.cc/torrents*
// @match        *://*.xingwan.cc/torrents*
// @match        *://yhpp.cc/torrents*
// @match        *://*.yhpp.cc/torrents*
// @match        *://zhuque.in/torrents*
// @match        *://*.zhuque.in/torrents*
// @match        *://zmpt.cc/torrents*
// @match        *://*.zmpt.cc/torrents*
// @match        *://zrpt.cc/torrents*
// @match        *://*.zrpt.cc/torrents*
// @match        *://pt.soulvoice.club/live*
// @match        *://*.pt.soulvoice.club/live*
// @match        *://tjupt.org/bonus*
// @match        *://*.tjupt.org/bonus*
// @match        *://*/mybonus*
// @license      GPL License
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        window.onurlchange
// ==/UserScript==

// ave不同范围对应的颜色及字重
const colorsOfAVE = [
    // null表示使用默认颜色和字重
    {min: 0, max: 1, color: null, fontWeight: null}, // 黑色
    {min: 1, max: 1.5, color: '#00008B', fontWeight: 700}, // 蓝色
    {min: 1.5, max: 2, color: '#8B4513', fontWeight: 800}, // 棕色
    {min: 2, max: Infinity, color: '#ff0000', fontWeight: 900} // 红色
]

function extractBonusParam(text, name, allowLoose = true) {
    if (!text) {
        return undefined
    }
    let normalized = text.replace(/\s+/g, ' ')
    let escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    let strictReg = new RegExp('(?:^|[^A-Za-z0-9])' + escapedName + '(?![A-Za-z0-9])\\s*(?:=|:|：)\\s*(\\d+(?:\\.\\d+)?)', 'i')
    let strictMatch = normalized.match(strictReg)
    if (strictMatch) {
        return parseFloat(strictMatch[1])
    }

    if (!allowLoose || normalized.length > 120) {
        return undefined
    }
    let looseReg = new RegExp('(?:^|[^A-Za-z0-9])' + escapedName + '(?![A-Za-z0-9])\\s+(\\d+(?:\\.\\d+)?)', 'i')
    let looseMatch = normalized.match(looseReg)
    return looseMatch ? parseFloat(looseMatch[1]) : undefined
}

function getBonusParamFromPage(name) {
    let nodes = document.querySelectorAll('li, div, p, span, td, th, tr')
    for (let node of nodes) {
        let value = extractBonusParam(node.innerText, name)
        if (Number.isFinite(value)) {
            return value
        }
    }
    return extractBonusParam(document.body ? document.body.innerText : '', name, false)
}

function getBonusParamsFromPage() {
    return {
        T0: getBonusParamFromPage('T0'),
        N0: getBonusParamFromPage('N0'),
        B0: getBonusParamFromPage('B0'),
        L: getBonusParamFromPage('L')
    }
}

function getSiteKey() {
    return (window.location.hostname || window.location.host || '').replace(/^www\./, '')
}

function getLegacySiteKey() {
    let match = (window.location.host || '').match(/\b[^\.]+\.[^\.]+$/)
    return match ? match[0] : getSiteKey()
}

function getStoredParam(name) {
    let value = GM_getValue(host + "." + name)
    if (!value && legacyHost && legacyHost !== host) {
        value = GM_getValue(legacyHost + "." + name)
    }
    return value
}

function setStoredParam(name, value) {
    GM_setValue(host + "." + name, value)
}

function isBonusParamPage() {
    return /\/(?:mybonus|bonus)(?:\.php)?(?:[?#/]|$)/i.test(window.location.pathname)
}

function parseFirstNumber(text) {
    let match = (text || '').replace(/,/g, '').match(/\d+(?:\.\d+)?/)
    return match ? parseFloat(match[0]) : undefined
}

function getMTeamBasicBonus($) {
    let basicBonus;
    $("td:contains('基本獎勵')").each(function () {
        if (Number.isFinite(basicBonus)) {
            return false
        }
        let oldLayoutValue = parseFirstNumber($(this).next('td').next('td').text())
        if (Number.isFinite(oldLayoutValue)) {
            basicBonus = oldLayoutValue
            return false
        }
        let values = $(this).nextAll('td').map(function () {
            return parseFirstNumber($(this).text())
        }).get().filter(Number.isFinite)
        if (values.length) {
            basicBonus = values[0]
        }
    });
    return basicBonus
}

function getMTeamSeedingBonusRule() {
    let text = document.body ? document.body.innerText.replace(/\s+/g, ' ') : ''
    let match = text.match(/(\d+(?:\.\d+)?)\s*個魔力值\s*\*\s*你的做種數.*?最多計\s*(\d+)\s*個/)
    return match ? {
        perSeed: parseFloat(match[1]),
        limit: parseInt(match[2])
    } : undefined
}

function getMTeamCurrentSeeding() {
    let text = document.body ? document.body.innerText.replace(/\s+/g, ' ') : ''
    let match = text.match(/當前活動\s*[:：]\s*(\d+)/)
    return match ? parseInt(match[1]) : undefined
}

function getCellSignature($cell) {
    let imageMeta = $cell.find('img').map(function () {
        return [
            this.className,
            this.alt,
            this.title,
            this.src
        ].join(' ')
    }).get().join(' ')
    return [
        $cell.text(),
        $cell.attr('title'),
        imageMeta,
        $cell.html()
    ].join(' ').toLowerCase()
}

function detectTorrentColumns($headerRow) {
    let columns = {time: null, size: null, seeders: null}
    $headerRow.children('td,th').each(function (col) {
        let $cell = jQuery(this)
        let sig = getCellSignature($cell)
        if (columns.time == null && (
            $cell.find('img.time').length ||
            /\btime\b|added|date|publish|發布|发布|時間|时间/.test(sig)
        )) {
            columns.time = col
        } else if (columns.size == null && (
            $cell.find('img.size').length ||
            /\bsize\b|大小|體積|体积/.test(sig)
        )) {
            columns.size = col
        } else if (columns.seeders == null && (
            $cell.find('img.seeders').length ||
            /seeders?|做種|做种|做種者|做种者|種子數|种子数/.test(sig)
        )) {
            columns.seeders = col
        }
    })
    return columns
}

function getGeneralSeedRows($) {
    let selectors = [
        '.torrents:last-of-type>tbody>tr',
        'table.torrents:last-of-type>tbody>tr',
        'table#torrent_table>tbody>tr',
        'table[class*="torrent"]:last-of-type>tbody>tr'
    ]
    for (let selector of selectors) {
        let rows = $(selector)
        if (rows.length > 1) {
            return rows
        }
    }

    let bestRows = $()
    $('table').each(function () {
        let rows = $(this).find('tbody>tr')
        if (rows.length <= 1) {
            rows = $(this).find('tr')
        }
        if (rows.length <= 1) {
            return
        }
        let columns = detectTorrentColumns(rows.first())
        if (columns.time != null && columns.size != null && columns.seeders != null) {
            bestRows = rows
        }
    })
    return bestRows
}

const formulaProfiles = {
    default: {
        name: 'NexusPHP',
        requiredParams: ['T0', 'N0', 'B0', 'L'],
        supportsBonusChart: true,
        columnTitle: 'A@A/GB',
        columnTip: 'A值@每GB的A值',
        calcA: function (T, S, N, rowText, params) {
            var c1 = 1 - Math.pow(10, -(T / params.T0));
            N = N ? N : 1;
            var c2 = 1 + Math.pow(2, .5) * Math.pow(10, -(N - 1) / (params.N0 - 1));
            return c1 * S * c2;
        },
        calcB: function (A, params) {
            return params.B0 * (2 / Math.PI) * Math.atan(A / params.L)
        }
    },
    audiences: {
        name: 'Audiences',
        requiredParams: ['T0', 'N0', 'L'],
        supportsBonusChart: false,
        columnTitle: 'A@A/GB',
        columnTip: '含官组/普通权重的A值@每GB的A值',
        calcA: function (T, S, N, rowText, params) {
            N = N ? N : 1;
            let adjustedSize = S;
            if (rowText.indexOf('零魔') !== -1) {
                if (N >= 10) {
                    return 0;
                }
                adjustedSize = S / 5;
            }
            let weight = /官组|官組|官方/.test(rowText) ? 1.5 : 0.5;
            let c1 = 1 - Math.pow(10, -(T / params.T0));
            let c2 = 1 + Math.pow(2, .5) * Math.pow(10, -(N - 1) / (params.N0 - 1));
            return c1 * adjustedSize * c2 * weight;
        }
    },
    hdarea: {
        name: 'HDArea v2',
        requiredParams: [],
        supportsBonusChart: false,
        columnTitle: 'Score@Score/GB',
        columnTip: 'HDArea新版算法单种预估分@每GB预估分，未扣除全局上限',
        calcA: function (T, S, N) {
            N = N ? N : 1;
            let countScore = S > 5 ? 1 : 0;
            let scarcityScore = S * (1 + Math.max(T, 0) * 0.02) * (1 + 1 / N) * 0.05;
            return countScore + scarcityScore;
        }
    },
    hhanclub: {
        name: 'HHANClub',
        requiredParams: [],
        supportsBonusChart: false,
        disableTorrentCalc: true,
        unsupportedMessage: 'HHANClub魔力页未提供完整基础公式参数，暂不计算单种A值，避免显示错误结果。'
    }
}

function getFormulaProfile() {
    if (host === 'audiences.me') {
        return formulaProfiles.audiences
    }
    if (host === 'hdarea.club') {
        return formulaProfiles.hdarea
    }
    if (host === 'hhanclub.net') {
        return formulaProfiles.hhanclub
    }
    return formulaProfiles.default
}

function areParamsReady(profile, params) {
    return profile.requiredParams.every(name => Number.isFinite(params[name]) && params[name] !== 0)
}

function getCurrentParams(T0, N0, B0, L) {
    return {T0: Number(T0), N0: Number(N0), B0: Number(B0), L: Number(L)}
}

function run() {
    var $ = jQuery;
    let formulaProfile = getFormulaProfile();
    if (formulaProfile.disableTorrentCalc) {
        if (!isMybonusPage && !GM_getValue(host + ".unsupportedFormulaNoticeShown")) {
            GM_setValue(host + ".unsupportedFormulaNoticeShown", true)
            alert(formulaProfile.unsupportedMessage)
        }
        return
    }


    let T0 = getStoredParam("T0");
    let N0 = getStoredParam("N0");
    let B0 = getStoredParam("B0");
    let L = getStoredParam("L");
    let argsReady = areParamsReady(formulaProfile, getCurrentParams(T0, N0, B0, L));
    let argsReadyBeforePageParse = argsReady;
    if (!argsReady) {
        if (!isMybonusPage) {
            alert("未找到魔力值参数,请打开魔力值系统说明获取（/mybonus）");
        }
    }
    if (isMybonusPage) {

        try {
            let params = getBonusParamsFromPage();
            if (Number.isFinite(params.T0)) {
                T0 = params.T0;
            }
            if (Number.isFinite(params.N0)) {
                N0 = params.N0;
            }
            if (Number.isFinite(params.B0)) {
                B0 = params.B0;
            }
            if (Number.isFinite(params.L)) {
                L = params.L;
            }
            argsReady = areParamsReady(formulaProfile, getCurrentParams(T0, N0, B0, L));
            if (!argsReady) {
                throw new Error("未在页面文本中找到当前站点公式所需参数: " + formulaProfile.requiredParams.join('/'));
            }
            console.log('数据提取成功:', T0, N0, B0, L);
        } catch (error) {
            console.error('数据提取过程中出现错误:', error);
        }

        if (argsReady) {
            if (Number.isFinite(Number(T0))) {
                setStoredParam("T0", T0);
            }
            if (Number.isFinite(Number(N0))) {
                setStoredParam("N0", N0);
            }
            if (Number.isFinite(Number(B0))) {
                setStoredParam("B0", B0);
            }
            if (Number.isFinite(Number(L))) {
                setStoredParam("L", L);
            }
            if (!argsReadyBeforePageParse && formulaProfile.requiredParams.length) {
                alert("魔力值参数已更新")
            }
        } else if (formulaProfile.requiredParams.length) {
            alert("魔力值参数获取失败,请将Tampermonkey的配置模式修改为高级后手动修改存储配置参数，详见说明文档")
        }

        if (!argsReady) {
            // 参数错误时不用继续计算了，否则会卡死页面
            return
        }

        function calcB(A) {
            return formulaProfile.calcB(A, getCurrentParams(T0, N0, B0, L))
        }

        function calcAbyB(B) {
            //从B值反推A值
            return Math.tan(B / B0 / (2 / Math.PI)) * L
        }

        if (!formulaProfile.supportsBonusChart) {
            return
        }

        let A = isMTeam ? 0 : parseFloat($("div:contains(' (A = ')")[0].innerText.split(" = ")[1]);
        let B = isMTeam ? getMTeamBasicBonus($) : calcB(A);
        if (isMTeam && !Number.isFinite(B)) {
            alert("未找到M-Team基本獎勵，无法绘制 B-A 图");
            return
        }
        // 剔除M-Team的基本奖励中做种数奖励
        if (isMTeam) {
            let seedingBonusRule = getMTeamSeedingBonusRule();
            let seedingBonusPerSeed = seedingBonusRule ? seedingBonusRule.perSeed : 0;
            let seedingBonusLimit = seedingBonusRule ? seedingBonusRule.limit : 0;
            let currentSeeding = getMTeamCurrentSeeding() || 0;
            B = B - (currentSeeding > seedingBonusLimit ?
                seedingBonusPerSeed * seedingBonusLimit : seedingBonusPerSeed * currentSeeding);
        }
        // 对于M-Team，B>B0是因为网页获取的基本奖励包括了做种数的奖励，上面代码已经进行排除。
        // 其他站暂不明确是否有该问题，下面一行的代码暂时保留
        B = B >= B0 ? B0 * 0.98 : B
        if (isMTeam) {
            A = calcAbyB(B);
        }

        let spot = [A, B]

        let data = []
        for (let i = 0; i < (1.1 * A > 25 * L ? 1.1 * A : 25 * L); i = i + L / 4) {
            data.push([i, calcB(i)])
        }

        let insertPos = isMTeam ? $("ul+table") : $("table+h1")
        insertPos.before('<div id="main" style="width: 600px;height:400px; margin:auto;"></div>')

        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'B - A 图',
                top: 'bottom',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                position: function (pos, params, el, elRect, size) {
                    var obj = {top: 10};
                    obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                    return obj;
                },
                extraCssText: 'width: 170px'
            },
            xAxis: {
                name: 'A',
            },
            yAxis: {
                name: 'B'
            },
            axisPointer: {
                label: {
                    backgroundColor: '#777'
                }
            },
            series: [
                {
                    type: 'line',
                    data: data,
                    symbol: 'none'
                },
                {
                    type: 'line',
                    data: [spot],
                    symbolSize: 6
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }


    function calcA(T, S, N) {
        return formulaProfile.calcA(T, S, N, '', getCurrentParams(T0, N0, B0, L));
    }

    /**
     *
     * @param $this 种子的每一行
     * @param i_T 种子发布时间所在列
     * @param i_S 种子体积所在列
     * @param i_N 做种人数人数所在列
     */
    function makeA($this, i_T, i_S, i_N) {
        let $cells = $this.children('td,th')
        var time = $cells.eq(i_T).find("span").attr("title");
        // 适配m-team的发生时间
        if (time == undefined || time == "") {
            time = $cells.eq(i_T).find("span").text();
        }
        // 适配tjupt的发生时间
        if (time == undefined || time == "") {
            time = ($cells.eq(i_T).html() || '').replace("<br>", " ").trim();
        }
        if (time == undefined || time == "") {
            time = $cells.eq(i_T).text().trim();
        }
        var T = (new Date().getTime() - new Date(time).getTime()) / 1e3 / 86400 / 7;
        var size = $cells.eq(i_S).text().trim();
        var size_tp = 1;
        var S = size.replace(/[KMGT]i?B/, function (tp) {
            if (tp == "KB" || tp == "KiB") {
                size_tp = 1 / 1024 / 1024;
            } else if (tp == "MB" || tp == "MiB") {
                size_tp = 1 / 1024;
            } else if (tp == "GB" || tp == "GiB") {
                size_tp = 1;
            } else if (tp == "TB" || tp == "TiB") {
                size_tp = 1024;
            }
            return "";
        });
        S = parseFloat(S) * size_tp;
        //var number = $this.children('td:eq(' + i_N + ')').text().trim();
        var number = $cells.eq(i_N).text().trim().replace(/,/g, ''); // 获取人数，删除多余符号
        //console.log(number);
        var N = parseInt(number);
        if (!Number.isFinite(T) || !Number.isFinite(S) || !Number.isFinite(N)) {
            return '<span title="无法解析发布时间、体积或做种人数">--</span>';
        }
        var rowText = $this.text();
        var A = formulaProfile.calcA(T, S, N, rowText, getCurrentParams(T0, N0, B0, L)).toFixed(2);
        var ave = (A / S).toFixed(2);

        var textA = '<span>' + A + '@' + ave + '</span>';
        colorsOfAVE.forEach(color => {
            if (ave >= color.min && ave < color.max && (color.color != null || color.fontWeight != null)) {
                textA = '<span style="'
                    + (color.color == null ? '' : 'color:' + color.color + ";")
                    + (color.fontWeight == null ? '' : 'font-weight:' + color.fontWeight + ";")
                    + '">' + A + '@' + ave + '</span>';
            }
        });
        return textA;
    }


    function addDataColGeneral() {
        var i_T, i_S, i_N
        let rows = getGeneralSeedRows($)
        if (!rows.length) {
            return
        }
        let addFlag = false
        rows.each(function (row) {
            var $this = $(this);
            if (row == 0) {
                let headerText = $this.text()
                addFlag = headerText.indexOf(formulaProfile.columnTitle) != -1
                    || headerText.indexOf('A@A/GB') != -1
                    || headerText.indexOf('Score@Score/GB') != -1
                let columns = detectTorrentColumns($this)
                i_T = columns.time
                i_S = columns.size
                i_N = columns.seeders
                if (i_T == null || i_S == null || i_N == null) {
                    alert('未能找到数据列')
                    return
                }
                if (!addFlag) {
                    $this.children("td,th").last().before("<td class=\"colhead\" title=\"" + formulaProfile.columnTip + "\">" + formulaProfile.columnTitle + "</td>");
                }
            } else {
                if (i_T == null || i_S == null || i_N == null || addFlag) {
                    return
                }
                var textA = makeA($this, i_T, i_S, i_N)
                $this.children("td,th").last().before("<td class=\"rowfollow\">" + textA + "</td>");
            }
        })
    }

    function addDataColMTeam() {
        let i_T, i_S, i_N, addFlag = false

        let colLen = $('div.mt-4>table>thead>tr>th').length
        if ($('div.mt-4>table>thead>tr>th:last').text().indexOf('A@A/GB') != -1) {
            addFlag = true
            colLen -= 1
        }
        i_T = colLen - 5
        i_S = colLen - 4
        i_N = colLen - 3
        if (!addFlag) {
            $('div.mt-4>table>thead>tr>th:last').after("<th class=\"border-0 border-b border-solid border-[--mt-line-color] p-2 \" style=\"width: 100px;\" title=\"A值@每GB的A值\"> " +
                "<div class=\"action\">A@A/GB</div>  </th>");
        }
        $(seedTableSelector).each(function (row) {
            var $this = $(this);
            var textA = makeA($this, i_T, i_S, i_N)
            let tdTextA = "<td class=\"border-0 border-b border-solid border-[--mt-line-color] p-0 \" align=\"center\">"
                + textA + "</td>"
            if (addFlag) {
                $this.children("td:last").html(textA)
            } else {
                $this.children("td:last").after(tdTextA)
                //<span class=\"block mx-[-5px]\">"+textA+"</span>
            }
        })
    }

    if (isMTeam) {
        addDataColMTeam()
    } else {
        addDataColGeneral()
    }
}


function MTteamWaitPageLoadAndRun() {
    let $ = jQuery
    let count = 0
    let tableBlured = false
    let T0Found = false
    let seedTableFound = false
    // 页面局部刷新后重新判断 isMybonusPage
    isMybonusPage = isBonusParamPage()
    let itv = setInterval(() => {

        if (isMybonusPage) {
            T0Found = Number.isFinite(getBonusParamFromPage('T0'))

        }
        if (T0Found || seedTableFound || count >= 100) {
            clearInterval(itv);
            run()
        }
        count++
    }, 100);

    let count2 = 0
    let itvTableBlur = setInterval(() => {
        if ($('div.ant-spin-blur')[0] || count2 >= 50) {
            tableBlured = true
            clearInterval(itvTableBlur)
        }
        count2++
    }, 100)
    let count3 = 0
    let itvTableUnblur = setInterval(() => {
        if (tableBlured && !$('div.ant-spin-blur')[0] || count3 >= 100) {
            seedTableFound = $(seedTableSelector)[1]
            if (seedTableFound || count3 >= 100) {
                clearInterval(itvTableUnblur)
            }
        }
        count3++
    }, 100)
}

let host = getSiteKey()
let legacyHost = getLegacySiteKey()
let isMTeam = window.location.toString().indexOf("m-team") != -1
let seedTableSelector = isMTeam ? 'div.mt-4>table>tbody>tr' : '.torrents:last-of-type>tbody>tr'
let isMybonusPage = isBonusParamPage()
if (window.location.toString().indexOf("tjupt.org") != -1) {
    isMybonusPage = window.location.toString().indexOf("bonus.php") != -1
}
if (isMTeam) {
    if (isMybonusPage || window.location.toString().indexOf("browse") != -1) {
        MTteamWaitPageLoadAndRun()
    }
} else {
    run()
}

var currentUrl = window.location.href;
if (window.onurlchange === null) {
    // M-Team 页面局部刷新时重新运行函数
    window.addEventListener('urlchange', (info) => MTteamWaitPageLoadAndRun());
}
