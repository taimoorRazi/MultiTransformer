# -*- coding: utf-8 -*-
"""Ulusoy MOU templates (EN | ZH), customised per counterparty. Ulusoy-favourable drafting."""

ULUSOY = {
    "en": "ULUSOY ROBOTİK VE TEKNOLOJİLERİ A.Ş., a joint-stock company organised under the laws of the Republic of Türkiye, with its registered address at Levent Mah. Şefik Sk. No:1, Levent, Beşiktaş, İstanbul, Türkiye, a member of the Ulusoy Group (\"Ulusoy\")",
    "zh": "ULUSOY ROBOTİK VE TEKNOLOJİLERİ A.Ş.，一家依据土耳其共和国法律设立的股份有限公司，注册地址为土耳其伊斯坦布尔贝西克塔什区勒文特 Şefik 街1号，系 Ulusoy 集团成员企业（以下简称“Ulusoy”）",
}

TERRITORY_EN = ("the Republic of Türkiye as the primary market, together with the Balkans (including Bulgaria, North Macedonia, Serbia, Romania, Greece and Albania), "
                "the Middle East and Gulf, and Central Asia and the Caucasus")
TERRITORY_ZH = "以土耳其共和国为主要市场，并包括巴尔干地区（含保加利亚、北马其顿、塞尔维亚、罗马尼亚、希腊和阿尔巴尼亚）、中东及海湾地区，以及中亚和高加索地区"

COMPANIES = {
"CRRC": dict(
    file="Ulusoy - CRRC - MOU (EN + ZH)",
    short=("CRRC", "中车"),
    party=("CRRC WIND POWER [full legal name to be confirmed], a company organised under the laws of the People's Republic of China, with its registered address at [address] (\"CRRC\")",
           "中车风电[完整法定名称待确认]，一家依据中华人民共和国法律设立的公司，注册地址为[地址]（以下简称“中车”）"),
    sign=("CRRC WIND POWER [full legal name]", "中车风电[完整法定名称]"),
    place=("[Zhuzhou, China]", "[中国株洲]"),
    subtitle=("on Cooperation in Renewable Energy Market Development\nin Türkiye and the Region", "关于在土耳其及周边地区开展可再生能源市场开发合作"),
    recital=("CRRC designs and manufactures wind turbines and key turbine components and, together with its affiliates, supplies solar inverters, battery energy storage systems, power conversion systems, prefabricated substations, hydrogen power supplies and related services.",
             "中车从事风力发电机组及关键部件的设计与制造，并与其关联公司共同提供光伏逆变器、电池储能系统、储能变流器、预制舱式变电站、制氢电源及相关服务。"),
    products=("(a) wind turbines, key components, installation supervision, operation and maintenance services and spare parts; (b) solar inverters and PV medium-voltage stations; (c) battery energy storage systems, power conversion systems and energy management systems; (d) prefabricated substations; (e) hydrogen power supplies; and (f) any other CRRC products later offered in the Territory",
              "（a）风力发电机组、关键部件、安装指导、运维服务及备品备件；（b）光伏逆变器及光伏中压箱变；（c）电池储能系统、储能变流器及能量管理系统；（d）预制舱式变电站；（e）制氢电源；以及（f）此后在合作区域内提供的任何其他中车产品"),
    party_roles=("provide product platforms, technical documentation and engineering support; prepare technical and commercial offers for Registered Opportunities within ten (10) working days of request; provide type certificates, power curves, references and bankability documents; host customer visits to factories and operating wind farms; and designate a contact team for the Territory",
                 "提供产品平台、技术资料及工程支持；在收到请求后十（10）个工作日内为登记项目编制技术及商务报价；提供型式认证证书、功率曲线、业绩证明及项目融资所需文件；接待客户参观工厂及运行中的风电场；并为合作区域指定对接团队"),
    ulusoy_roles=("identify and develop projects and customer accounts; map decision-makers and procurement timing; introduce and coordinate EPC contractors, local partners and logistics providers; coordinate CRRC's teams with customers; support tenders and negotiations; and provide market and competitor information",
                  "识别并开发项目及客户；梳理客户决策人及采购时间安排；引荐并协调 EPC 总包商、本地合作伙伴及物流服务商；协调中车团队与客户的对接；支持投标及商务谈判；并提供市场及竞争对手信息"),
    actions=[("Within two (2) weeks of signing, each Party names its contact persons.", "本备忘录签署后两（2）周内，双方各自指定联系人。"),
             ("CRRC reviews the opportunities in Annex A and gives its view on suitable turbine platforms and products within thirty (30) days.", "中车在三十（30）日内对附件A所列项目进行评估，并就适用的风机平台及产品提出意见。"),
             ("The Parties hold a working session within sixty (60) days of signing to agree a joint plan for the Territory.", "双方在本备忘录签署后六十（60）日内召开工作会议，商定合作区域的联合计划。")],
    special=[("Existing cooperation. This MOU does not amend any existing agreement between the Parties or their affiliates. Any customer or project on which the Parties already cooperate is a Registered Opportunity from the date of signing.",
              "现有合作。本备忘录不修改双方或其关联公司之间的任何现有协议。双方已在合作的任何客户或项目，自本备忘录签署之日起即为登记项目。")],
    definitive=("a representation agreement for the Territory", "合作区域代理协议"),
    annex=[("PLAKE and Makedonski Brod wind projects, North Macedonia (about 127 MW), through Ulusoy's development partner", "北马其顿 PLAKE 及 Makedonski Brod 风电项目（约127兆瓦），通过 Ulusoy 的开发合作伙伴"),
           ("Radilovo and Katselovo solar and battery storage projects, Bulgaria, through Ulusoy's development partner", "保加利亚 Radilovo 及 Katselovo 光伏及储能项目，通过 Ulusoy 的开发合作伙伴"),
           ("Karnobat solar expansion and battery storage, Bulgaria, through Ulusoy's development partner", "保加利亚 Karnobat 光伏扩建及储能项目，通过 Ulusoy 的开发合作伙伴"),
           ("Off-grid solar and battery storage project, Middle East, through Ulusoy's development partner", "中东离网光伏及储能项目，通过 Ulusoy 的开发合作伙伴"),
           ("The wind project in Türkiye on which the Parties already cooperate", "双方已在合作的土耳其风电项目")],
),
"TBEA": dict(
    file="Ulusoy - TBEA - MOU (EN + ZH)",
    short=("TBEA", "特变电工"),
    party=("TBEA CO., LTD. [or the relevant TBEA subsidiary — to be confirmed], a company organised under the laws of the People's Republic of China, with its registered address at [address] (\"TBEA\")",
           "特变电工股份有限公司[或相关特变电工子公司——待确认]，一家依据中华人民共和国法律设立的公司，注册地址为[地址]（以下简称“特变电工”）"),
    sign=("TBEA CO., LTD. [or relevant subsidiary]", "特变电工股份有限公司[或相关子公司]"),
    place=("[Hengyang, China]", "[中国衡阳]"),
    subtitle=("on Cooperation in Energy and Grid Market Development\nin Türkiye and the Region", "关于在土耳其及周边地区开展能源与电网市场开发合作"),
    recital=("TBEA manufactures power and distribution transformers, switchgear and gas-insulated switchgear, cables and conductors, solar inverters and battery storage systems, and delivers substation and power-plant projects including on an EPC basis.",
             "特变电工从事电力变压器及配电变压器、开关设备及气体绝缘开关设备、电线电缆、光伏逆变器及储能系统的制造，并以包括 EPC 在内的方式承接变电站及电站项目。"),
    products=("(a) power, distribution and dry-type transformers and reactors; (b) switchgear, gas-insulated switchgear and protection systems; (c) cables and conductors; (d) prefabricated and mobile substations; (e) solar inverters, battery energy storage systems and power conversion systems; (f) substation, transmission and power-plant projects including EPC; and (g) any other TBEA products later offered in the Territory",
              "（a）电力变压器、配电变压器、干式变压器及电抗器；（b）开关设备、气体绝缘开关设备及保护系统；（c）电线电缆；（d）预制舱式及移动式变电站；（e）光伏逆变器、电池储能系统及储能变流器；（f）包括 EPC 在内的变电站、输电及电站项目；以及（g）此后在合作区域内提供的任何其他特变电工产品"),
    party_roles=("provide product and project documentation, references and engineering support; prepare technical and commercial offers for Registered Opportunities within ten (10) working days of request; support qualification with utilities and developers; host customer factory visits; and designate a contact team for the Territory",
                 "提供产品及项目资料、业绩证明及工程支持；在收到请求后十（10）个工作日内为登记项目编制技术及商务报价；支持在电力公司及开发商处的资格认证；接待客户参观工厂；并为合作区域指定对接团队"),
    ulusoy_roles=("identify and develop projects and customer accounts with developers, EPC contractors, utilities and industrial groups; map decision-makers and procurement timing; coordinate TBEA's teams with customers; support tenders and negotiations; and provide market, tender and competitor information",
                  "识别并开发开发商、EPC 总包商、电力公司及工业集团的项目及客户；梳理客户决策人及采购时间安排；协调特变电工团队与客户的对接；支持投标及商务谈判；并提供市场、招标及竞争对手信息"),
    actions=[("Within two (2) weeks of signing, each Party names its contact persons.", "本备忘录签署后两（2）周内，双方各自指定联系人。"),
             ("TBEA reviews the opportunities in Annex A and indicates its supply scope and interest within thirty (30) days.", "特变电工在三十（30）日内对附件A所列项目进行评估，并说明其供货范围及意向。"),
             ("The Parties hold a working session within sixty (60) days of signing to agree a joint plan for the Territory.", "双方在本备忘录签署后六十（60）日内召开工作会议，商定合作区域的联合计划。")],
    special=[("Projects already presented. The projects already presented by Ulusoy to TBEA before signing, including by letter and presentation, are listed in Annex A and are Registered Opportunities from the date of signing.",
              "已介绍项目。Ulusoy 在本备忘录签署前已通过函件及演示文件向特变电工介绍的项目列于附件A，自签署之日起即为登记项目。")],
    definitive=("a representation agreement for the Territory", "合作区域代理协议"),
    annex=[("Radilovo and Katselovo solar and battery storage projects, Bulgaria (371 MW AC / 1,200 MWh), through Ulusoy's development partner", "保加利亚 Radilovo 及 Katselovo 光伏及储能项目（371兆瓦交流 / 1,200兆瓦时），通过 Ulusoy 的开发合作伙伴"),
           ("PLAKE and Golem Kamen wind projects, North Macedonia, through Ulusoy's development partner", "北马其顿 PLAKE 及 Golem Kamen 风电项目，通过 Ulusoy 的开发合作伙伴"),
           ("Karnobat solar expansion and battery storage, Bulgaria, through Ulusoy's development partner", "保加利亚 Karnobat 光伏扩建及储能项目，通过 Ulusoy 的开发合作伙伴"),
           ("Off-grid solar and battery storage project, Middle East, through Ulusoy's development partner", "中东离网光伏及储能项目，通过 Ulusoy 的开发合作伙伴")],
),
"AIMS": dict(
    file="Ulusoy - AIMS - MOU (EN + ZH)",
    short=("AIMS", "科大智联"),
    party=("AIMS TECHNOLOGY CO., LTD. (科大智能物联技术股份有限公司), a company organised under the laws of the People's Republic of China, with its registered address at 6F-7F, Building A1, Zhong'an Chuanggu, No. 900 Wangjiang West Road, Shushan District, Hefei, Anhui Province, China (\"AIMS\")",
           "科大智能物联技术股份有限公司（AIMS TECHNOLOGY CO., LTD.），一家依据中华人民共和国法律设立的公司，注册地址为中国安徽省合肥市蜀山区望江西路900号中安创谷A1栋6-7层（以下简称“AIMS”）"),
    sign=("AIMS TECHNOLOGY CO., LTD.", "科大智能物联技术股份有限公司"),
    place=("[Shanghai, China]", "[中国上海]"),
    subtitle=("on Cooperation in Smart Factory and Intralogistics Solutions\nin Türkiye and the Region", "关于在土耳其及周边地区开展智能工厂及智能物流解决方案合作"),
    recital=("AIMS designs and delivers intelligent manufacturing solutions, including automated storage and retrieval systems, RGVs, AGVs, robotic workstations, warehouse, logistics and manufacturing execution software, and AI-based process and energy optimisation, with particular experience in transformer and power-equipment plants.",
             "AIMS 从事智能制造解决方案的设计与交付，包括自动化立体仓库、RGV、AGV、机器人工作站、仓储、物流及制造执行软件，以及基于人工智能的工艺与能耗优化，尤其在变压器及电力设备工厂领域具有丰富经验。"),
    products=("(a) automated storage and retrieval systems, RGVs, AGVs, conveyors and loading and unloading systems; (b) robotic and automated workstations and vision inspection; (c) AIMS-MOS, WMS, WCS, LES, uRMS, MES, APS and related software; (d) process and energy optimisation systems for furnaces and process lines; (e) solution engineering, implementation and after-sales services; and (f) any other AIMS products and services later offered in the Territory",
              "（a）自动化立体仓库、RGV、AGV、输送及装卸系统；（b）机器人及自动化工作站与视觉检测；（c）AIMS-MOS、WMS、WCS、LES、uRMS、MES、APS 及相关软件；（d）用于加热炉及工艺产线的工艺与能耗优化系统；（e）解决方案设计、项目实施及售后服务；以及（f）此后在合作区域内提供的任何其他 AIMS 产品及服务"),
    party_roles=("analyse customer needs and prepare concepts, layouts, calculations and proposals for Registered Opportunities; provide equipment, software and engineering; lead implementation and commissioning; provide remote support; and designate a solution and project contact for the Territory",
                 "分析客户需求，并为登记项目编制方案、布局、计算及建议书；提供设备、软件及工程服务；主导项目实施及调试；提供远程支持；并为合作区域指定解决方案及项目对接人"),
    ulusoy_roles=("identify and develop projects and customer accounts; organise customer meetings and site surveys; coordinate local installation, subcontractors and logistics; provide first-line local service, spare-parts support and training; offer heavy-load AGVs where suitable; and provide market and competitor information",
                  "识别并开发项目及客户；组织客户会议及现场调研；协调本地安装、分包商及物流；提供本地一线服务、备件支持及培训；在适用时提供重载 AGV；并提供市场及竞争对手信息"),
    actions=[("Within two (2) weeks of signing, each Party names its contact persons.", "本备忘录签署后两（2）周内，双方各自指定联系人。"),
             ("The Parties select the first Registered Opportunity and agree dates for a joint site survey in Türkiye.", "双方选定首个登记项目，并商定在土耳其开展联合现场调研的日期。"),
             ("AIMS provides English marketing materials, case studies and videos for use with customers in the Territory.", "AIMS 提供英文宣传资料、案例及视频，供在合作区域内向客户介绍使用。")],
    special=[("Local implementation and service partner. For Registered Opportunities, AIMS shall first offer Ulusoy the role of local implementation partner (installation coordination, local subcontracting and site support) and first-line after-sales service partner, on terms to be agreed in good faith. Ulusoy's share of after-sales service revenue from Registered Customers forms part of its remuneration under Clause 7.",
              "本地实施及服务合作伙伴。对于登记项目，AIMS 应优先向 Ulusoy 提供本地实施合作伙伴（安装协调、本地分包及现场支持）及一线售后服务合作伙伴的角色，具体条款由双方本着诚信原则商定。Ulusoy 在登记客户售后服务收入中的分成构成第七条项下报酬的一部分。")],
    definitive=("a representation and local implementation partner agreement for the Territory", "合作区域代理及本地实施合作伙伴协议"),
    annex=[("[Customer name — transformer manufacturer in Türkiye presented AIMS in November 2026, to be confirmed by Ulusoy]", "[客户名称——2026年11月已向其介绍 AIMS 的土耳其变压器制造商，由 Ulusoy 确认]"),
           ("[Further opportunities to be added by registration notice]", "[其他项目将通过登记通知补充]")],
),
"AILU": dict(
    file="Ulusoy - AILU - MOU (EN + ZH)",
    short=("AILU", "艾录"),
    party=("SHANGHAI AILU PACKAGE CO., LTD. (上海艾录包装股份有限公司), a company organised under the laws of the People's Republic of China, with its registered address at No. 88 Yangle Road, [district], Shanghai, China [to be confirmed] (\"AILU\")",
           "上海艾录包装股份有限公司（SHANGHAI AILU PACKAGE CO., LTD.），一家依据中华人民共和国法律设立的公司，注册地址为中国上海市[区]阳乐路88号[待确认]（以下简称“艾录”）"),
    sign=("SHANGHAI AILU PACKAGE CO., LTD.", "上海艾录包装股份有限公司"),
    place=("[Shanghai, China]", "[中国上海]"),
    subtitle=("on Cooperation in Market Development for Packaging,\nPacking Systems and PV Frames in Türkiye and the Region", "关于在土耳其及周边地区开展包装、包装系统及光伏边框市场开发合作"),
    recital=("AILU, together with its subsidiaries, manufactures industrial paper sacks, plastic and barrier packaging, intelligent filling and packing systems (REVOPAC), cosmetic tubes and containers (IKKO) and composite photovoltaic module frames.",
             "艾录及其子公司从事工业纸袋、塑料及高阻隔包装、智能灌装及包装系统（锐派 REVOPAC）、化妆品软管及容器（艾鲲 IKKO）以及复合材料光伏组件边框的制造。"),
    products=("(a) industrial paper sacks, including valve, square-bottom, heat-seal and sewn sacks; (b) plastic and barrier packaging and films; (c) REVOPAC filling, bagging, palletising and packing lines; (d) IKKO cosmetic, pharmaceutical and food tubes and containers; (e) composite photovoltaic module frames; and (f) any other AILU group products later offered in the Territory",
              "（a）工业纸袋，包括阀口袋、方底袋、热封口袋及缝底袋；（b）塑料及高阻隔包装与薄膜；（c）锐派（REVOPAC）灌装、装袋、码垛及包装生产线；（d）艾鲲（IKKO）化妆品、药品及食品软管与容器；（e）复合材料光伏组件边框；以及（f）此后在合作区域内提供的任何其他艾录集团产品"),
    party_roles=("provide catalogues, technical data sheets, certificates and samples free of charge for customer trials; provide indicative and firm export prices in USD within five (5) working days of request; reserve production capacity for Registered Opportunities; provide technical support for qualification; and host customer visits to its plants",
                 "免费提供产品目录、技术数据表、证书及用于客户试用的样品；在收到请求后五（5）个工作日内提供以美元计价的指导价及正式出口报价；为登记项目预留产能；为产品认证提供技术支持；并接待客户参观工厂"),
    ulusoy_roles=("carry out a market study for the Territory; identify and develop customer accounts; organise samples, line trials and customer qualification; handle import, customs, warehousing and local delivery where agreed; manage claims and after-sales coordination; and provide market and competitor information",
                  "开展合作区域的市场调研；识别并开发客户；组织样品、产线试用及客户认证；在约定情况下负责进口、清关、仓储及本地配送；处理索赔及售后协调；并提供市场及竞争对手信息"),
    actions=[("Within two (2) weeks of signing, each Party names its contact persons and AILU provides catalogues, data sheets and certificates.", "本备忘录签署后两（2）周内，双方各自指定联系人，艾录提供产品目录、技术数据表及证书。"),
             ("Ulusoy completes a market study for Türkiye within about two (2) months and shares a joint entry plan with priority products and target customers.", "Ulusoy 在约两（2）个月内完成土耳其市场调研，并提交包含优先产品及目标客户的联合市场进入计划。"),
             ("AILU provides samples for the first customer trials within thirty (30) days of request.", "艾录在收到请求后三十（30）日内提供首批客户试用样品。")],
    special=[("Right to become distributor. AILU grants Ulusoy a right of first refusal to be appointed as AILU's distributor in Türkiye for any product line in the Territory. Before appointing any other distributor, agent or trading partner for Türkiye, AILU shall first offer the appointment to Ulusoy on the same terms.",
              "成为经销商的权利。艾录授予 Ulusoy 就合作区域内任何产品线被指定为艾录土耳其经销商的优先权。在指定任何其他土耳其经销商、代理商或贸易伙伴之前，艾录应首先以相同条件向 Ulusoy 提供该指定。")],
    definitive=("a distribution agreement for agreed products in the Territory", "合作区域内约定产品的经销协议"),
    annex=[("[No opportunities registered at signing — to be added by registration notice]", "[签署时暂无登记项目——将通过登记通知补充]")],
),
}


def build(key):
    c = COMPANIES[key]
    S, SZ = c["short"]
    parties = [
        (f"This Memorandum of Understanding (the \"MOU\") is entered into on [date] in {c['place'][0]} by and between:",
         f"本谅解备忘录（以下简称“本备忘录”）由以下双方于[日期]在{c['place'][1]}签订："),
        ("(1) " + c["party"][0] + "; and", "（1）" + c["party"][1] + "；以及"),
        ("(2) " + ULUSOY["en"] + ".", "（2）" + ULUSOY["zh"] + "。"),
        (f"{S} and Ulusoy are each a \"Party\" and together the \"Parties\".", f"{SZ}与 Ulusoy 以下单称“一方”，合称“双方”。"),
    ]
    recitals = [
        ("A. " + c["recital"][0], "A. " + c["recital"][1]),
        ("B. Ulusoy is a member of the Ulusoy Group, a family-owned group founded in Türkiye in 1937, with long-standing relationships with industrial, energy and infrastructure companies in Türkiye and access to customers and projects across the Territory.",
         "B. Ulusoy 是 Ulusoy 集团的成员企业。Ulusoy 集团是一家于1937年在土耳其创立的家族企业，与土耳其的工业、能源及基础设施企业保持长期合作关系，并在合作区域内拥有客户及项目资源。"),
        (f"C. The Parties wish to set out the framework for a long-term cooperation in which Ulusoy develops the market for {S}'s Products in the Territory, and to protect the customers and opportunities that Ulusoy introduces.",
         f"C. 双方希望确立长期合作框架，由 Ulusoy 在合作区域内开发{SZ}合作产品的市场，并保护 Ulusoy 所引荐的客户及项目机会。"),
        ("NOW, THEREFORE, the Parties agree as follows:", "为此，双方达成如下约定："),
    ]
    clauses = []
    clauses.append(("1. Purpose", "第一条 目的", [
        (f"1.1 The purpose of this MOU is to record the Parties' intention to cooperate in developing the market for {S}'s Products in the Territory, and to set out binding rules protecting the customers and opportunities introduced by Ulusoy.",
         f"1.1 本备忘录旨在记录双方在合作区域内共同开发{SZ}合作产品市场的意向，并确立保护 Ulusoy 所引荐客户及项目机会的约束性规则。")]))
    clauses.append(("2. Scope", "第二条 合作范围", [
        (f"2.1 Products. \"Products\" means {c['products'][0]}.", f"2.1 合作产品。“合作产品”指{c['products'][1]}。"),
        (f"2.2 Territory. \"Territory\" means {TERRITORY_EN}.", f"2.2 合作区域。“合作区域”指{TERRITORY_ZH}。"),
        (f"2.3 Affiliates. {S} shall procure that its affiliates comply with this MOU as if they were a Party. Products supplied by {S}'s affiliates are covered by this MOU.",
         f"2.3 关联公司。{SZ}应促使其关联公司如同本备忘录一方一样遵守本备忘录。由{SZ}关联公司提供的产品同样受本备忘录约束。"),
    ]))
    clauses.append(("3. Roles of the Parties", "第三条 双方职责", [
        (f"3.1 Ulusoy will {c['ulusoy_roles'][0]}.", f"3.1 Ulusoy 将{c['ulusoy_roles'][1]}。"),
        (f"3.2 {S} will {c['party_roles'][0]}.", f"3.2 {SZ}将{c['party_roles'][1]}。"),
        ("3.3 Each Party acts as an independent contractor. Neither Party may bind the other without prior written consent.", "3.3 双方均为独立的合同主体。未经对方事先书面同意，任何一方均无权约束对方。"),
    ]))
    clauses.append(("4. Staged Cooperation and Definitive Agreement", "第四条 分阶段合作及正式协议", [
        (f"4.1 The Parties intend to develop the cooperation in stages: market development, first orders, and a long-term presence in the Territory. The Parties shall negotiate in good faith and aim to sign {c['definitive'][0]} within six (6) months of signing this MOU.",
         f"4.1 双方拟分阶段推进合作：市场开发、首批订单及在合作区域内的长期布局。双方应本着诚信原则进行谈判，力争在本备忘录签署后六（6）个月内签订{c['definitive'][1]}。"),
        (f"4.2 Right of first refusal. During the term of this MOU, before appointing any other agent, representative, distributor or partner for the Products in Türkiye, {S} shall first offer that appointment to Ulusoy on the same terms. Ulusoy shall respond within thirty (30) days.",
         f"4.2 优先权。在本备忘录有效期内，{SZ}在为合作产品于土耳其指定任何其他代理商、代表、经销商或合作伙伴之前，应首先以相同条件向 Ulusoy 提供该指定。Ulusoy 应在三十（30）日内答复。"),
        ("4.3 Until a definitive agreement is signed, Clauses 5 to 7 govern all opportunities registered by Ulusoy.", "4.3 在正式协议签署前，Ulusoy 登记的所有项目机会均适用第五条至第七条。"),
    ] + [(f"4.{4+i} " + en, f"4.{4+i} " + zh) for i, (en, zh) in enumerate(c["special"])]))
    clauses.append(("5. Registration of Opportunities", "第五条 项目登记", [
        (f"5.1 Ulusoy may register any customer, project or opportunity in the Territory (a \"Registered Opportunity\") by written notice (including email) to {S}'s contact person, stating the customer, the project or plant and the Products of interest.",
         f"5.1 Ulusoy 可通过向{SZ}联系人发出书面通知（包括电子邮件）登记合作区域内的任何客户、项目或机会（“登记项目”），注明客户、项目或工厂及意向合作产品。"),
        (f"5.2 {S} shall confirm the registration within ten (10) working days. If {S} does not reply within that period, the registration is deemed accepted. {S} may reject a registration only by showing, with written evidence dated before the registration notice, that it was already actively negotiating with that customer for the same project.",
         f"5.2 {SZ}应在十（10）个工作日内确认登记。如{SZ}在该期限内未答复，视为接受登记。{SZ}仅可在出示登记通知日期之前的书面证据、证明其已就同一项目与该客户进行实质性洽谈的情况下拒绝登记。"),
        ("5.3 A Registered Opportunity covers the customer and its affiliates, for all of their projects and plants in the Territory involving the Products.", "5.3 登记项目涵盖该客户及其关联公司在合作区域内涉及合作产品的全部项目及工厂。"),
        ("5.4 A registration is protected for twenty-four (24) months from acceptance and is automatically renewed for further twelve (12) month periods while discussions, offers or orders with the customer continue.", "5.4 登记自接受之日起受保护二十四（24）个月，并在与该客户的洽谈、报价或订单持续期间自动续期，每次续期十二（12）个月。"),
        ("5.5 The opportunities listed in Annex A are Registered Opportunities from the date of signing.", "5.5 附件A所列项目自本备忘录签署之日起即为登记项目。"),
    ]))
    clauses.append(("6. Non-Circumvention", "第六条 不规避", [
        (f"6.1 {S} shall not, directly or indirectly (including through its affiliates, employees, other agents, distributors or partners), contact, quote, negotiate with, contract with or supply any Registered Opportunity except through or with the written consent of Ulusoy.",
         f"6.1 未经 Ulusoy 参与或书面同意，{SZ}不得直接或间接（包括通过其关联公司、员工、其他代理商、经销商或合作伙伴）联系任何登记项目，或向其报价、与其谈判、签约或供货。"),
        (f"6.2 Any enquiry that {S} receives from a Registered Opportunity shall be passed to Ulusoy within five (5) working days and handled jointly.",
         f"6.2 {SZ}收到登记项目的任何询价，应在五（5）个工作日内转交 Ulusoy，并由双方共同处理。"),
        (f"6.3 {S} shall not use information received from Ulusoy to approach any customer independently.", f"6.3 {SZ}不得利用从 Ulusoy 获得的信息独立接触任何客户。"),
    ]))
    clauses.append(("7. Remuneration of Ulusoy", "第七条 Ulusoy 的报酬", [
        (f"7.1 Ulusoy is entitled to remuneration on every contract, order, follow-on order, expansion, spare-parts sale and service agreement between {S} (or its affiliates) and a Registered Opportunity, whether or not Ulusoy signs it.",
         f"7.1 对于{SZ}（或其关联公司）与登记项目之间的每一份合同、订单、追加订单、扩建项目、备件销售及服务协议，无论 Ulusoy 是否签署，Ulusoy 均有权获得报酬。"),
        ("7.2 The remuneration model (commission, margin or Ulusoy acting as contracting party) and rate shall be agreed for each project. Unless otherwise agreed in writing, the commission shall be not less than [●]% of the contract value.",
         "7.2 报酬模式（佣金、差价或由 Ulusoy 作为签约方）及比例应逐个项目约定。除非另有书面约定，佣金不低于合同金额的[●]%。"),
        (f"7.3 Commission is paid in USD, in proportion to each payment {S} receives from the customer, within fifteen (15) days of receipt, without set-off or deduction.",
         f"7.3 佣金以美元支付，按{SZ}每次收到客户付款的比例，在收款后十五（15）日内支付，不得抵销或扣减。"),
        (f"7.4 {S} shall inform Ulusoy of every offer, contract and payment involving a Registered Opportunity and, on request, provide copies of the relevant invoices.",
         f"7.4 {SZ}应将涉及登记项目的每份报价、合同及付款告知 Ulusoy，并应要求提供相关发票副本。"),
        ("7.5 Tail period. Ulusoy's entitlement continues for any contract signed with a Registered Opportunity during the protection period or within twenty-four (24) months after expiry or termination of this MOU.",
         "7.5 延续期。对于在保护期内或本备忘录期满或终止后二十四（24）个月内与登记项目签订的任何合同，Ulusoy 的报酬权利持续有效。"),
        (f"7.6 If {S} breaches Clause 6, it shall pay Ulusoy the full remuneration that Ulusoy would have earned, plus liquidated damages equal to [●]% of the contract value, without prejudice to other remedies.",
         f"7.6 如{SZ}违反第六条，应向 Ulusoy 支付其本应获得的全部报酬，另加相当于合同金额[●]%的违约金，且不影响其他救济。"),
    ]))
    clauses.append(("8. First Joint Actions", "第八条 首批合作行动", [(f"8.{i+1} " + en, f"8.{i+1} " + zh) for i, (en, zh) in enumerate(c["actions"])]))
    clauses.append(("9. Costs", "第九条 费用", [
        ("9.1 Each Party bears its own costs, except as stated in this MOU. Samples, technical documentation and the travel of its own engineers are at the cost of the Party providing them.",
         "9.1 除本备忘录另有约定外，双方各自承担己方费用。样品、技术资料及己方工程师的差旅费用由提供方承担。")]))
    clauses.append(("10. Confidentiality", "第十条 保密", [
        ("10.1 Each Party keeps confidential all non-public information received from the other, including customer, project and pricing information, and uses it only for this MOU. Customer information provided by Ulusoy remains Ulusoy's confidential information. This obligation survives for five (5) years after expiry or termination.",
         "10.1 双方应对从对方获得的所有非公开信息（包括客户、项目及价格信息）予以保密，并仅为本备忘录之目的使用。Ulusoy 提供的客户信息始终属于 Ulusoy 的保密信息。本义务在本备忘录期满或终止后继续有效五（5）年。")]))
    clauses.append(("11. Compliance", "第十一条 合规", [
        ("11.1 Each Party complies with all applicable laws, including anti-bribery, export control, sanctions and competition laws.", "11.1 双方应遵守所有适用法律，包括反贿赂、出口管制、制裁及竞争法律。")]))
    clauses.append(("12. Names, Intellectual Property and Staff", "第十二条 名称、知识产权及人员", [
        ("12.1 Neither Party uses the other's name or logo, or announces this MOU publicly, without prior written consent. Each Party keeps its intellectual property.", "12.1 未经对方事先书面同意，任何一方不得使用对方名称或标识，亦不得公开宣布本备忘录。双方各自保留其知识产权。"),
        (f"12.2 During the term and for twelve (12) months after, {S} shall not employ or engage any employee of Ulusoy involved in this cooperation without Ulusoy's written consent.",
         f"12.2 在本备忘录有效期内及其后十二（12）个月内，未经 Ulusoy 书面同意，{SZ}不得雇用或聘用参与本合作的任何 Ulusoy 员工。"),
    ]))
    clauses.append(("13. Legal Effect", "第十三条 法律效力", [
        ("13.1 Clauses 1 to 4 and 8 are a statement of intent. Clauses 4.2, 4.3 and the special provisions of Clause 4, and Clauses 5, 6, 7, 9, 10, 11, 12, 13, 14, 15 and 16 are legally binding.",
         "13.1 第一条至第四条及第八条为意向性条款。第4.2条、第4.3条及第四条中的特别约定，以及第五条、第六条、第七条、第九条、第十条、第十一条、第十二条、第十三条、第十四条、第十五条及第十六条具有法律约束力。")]))
    clauses.append(("14. Term and Termination", "第十四条 期限及终止", [
        ("14.1 This MOU takes effect on signing and remains in force for three (3) years, renewing automatically for further one (1) year periods unless either Party gives ninety (90) days' written notice.", "14.1 本备忘录自签署之日起生效，有效期三（3）年；除非任何一方提前九十（90）日书面通知，否则自动续期，每次续期一（1）年。"),
        ("14.2 Either Party may terminate this MOU on ninety (90) days' written notice. Clauses 5, 6, 7, 10, 12 and 15 survive expiry or termination for the periods stated in them.", "14.2 任何一方可提前九十（90）日书面通知终止本备忘录。第五条、第六条、第七条、第十条、第十二条及第十五条在本备忘录期满或终止后按其规定的期限继续有效。"),
    ]))
    clauses.append(("15. Governing Law and Disputes", "第十五条 适用法律及争议解决", [
        ("15.1 This MOU is governed by the laws of Hong Kong SAR.", "15.1 本备忘录适用中华人民共和国香港特别行政区法律。"),
        ("15.2 Disputes not resolved by consultation within thirty (30) days are finally settled by arbitration administered by the Hong Kong International Arbitration Centre under its rules. The seat is Hong Kong and the language is English.",
         "15.2 争议如在三十（30）日内未能协商解决，应提交香港国际仲裁中心按其规则进行最终仲裁。仲裁地为香港，仲裁语言为英文。"),
    ]))
    clauses.append(("16. Language, Counterparts and Notices", "第十六条 语言、文本及通知", [
        ("16.1 This MOU is made in English and Chinese. In case of inconsistency, the English version prevails.", "16.1 本备忘录以英文和中文书就。如两种文本存在不一致，以英文文本为准。"),
        ("16.2 This MOU is signed in two (2) originals; scanned signatures are valid. Notices may be given by email to the contact persons named under Clause 8.", "16.2 本备忘录一式两（2）份；扫描签字同样有效。通知可通过电子邮件发送至依第八条指定的联系人。"),
    ]))
    annex = [("ANNEX A — Registered Opportunities at signing", "附件A——签署时的登记项目")] + [(f"{i+1}. " + en, f"{i+1}. " + zh) for i, (en, zh) in enumerate(c["annex"])]
    annex_b = [("ANNEX B — Registration notice (minimum content)", "附件B——登记通知（最低内容）"),
               ("Customer name and group; plant or project and location; Products of interest; expected timing; Ulusoy contact; date of notice.",
                "客户名称及所属集团；工厂或项目及所在地；意向合作产品；预计时间；Ulusoy 联系人；通知日期。")]
    return dict(file=c["file"], title=("MEMORANDUM OF UNDERSTANDING", "谅解备忘录"), subtitle=c["subtitle"], parties=parties, recitals=recitals,
                clauses=clauses, annex=annex, annex_b=annex_b, sign=[c["sign"], ("ULUSOY ROBOTİK VE TEKNOLOJİLERİ A.Ş.", "ULUSOY ROBOTİK VE TEKNOLOJİLERİ A.Ş.")], short=S)
