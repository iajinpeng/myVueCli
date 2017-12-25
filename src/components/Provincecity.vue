<template>
    <div>
        <Cascader :data="province" v-model="CurValue"></Cascader>
    </div>
</template>

<script>
	export default{
		model: {
			prop: 'value',
            event: 'change',
        },
        props: {
	        value: {
		        type: [Array],
		        default: ['', '', '']
	        },
        },
		watch: {
			CurValue(v){
				this.$emit('change', v);
			},
			value(v){
				this.CurValue = v;
			}
		},
		data(){
			return {
				CurValue: this.value,
				province: [{
					"value": "13",
					"label": "安徽",
					"children": [{
						"value": "13173",
						"label": "安庆",
						"children": [{"value": "13225", "label": "枞阳"}, {"value": "13185", "label": "大观"}, {
							"value": "13204",
							"label": "怀宁"
						}, {"value": "13248", "label": "潜山"}, {"value": "13265", "label": "太湖"}, {
							"value": "13340",
							"label": "桐城"
						}, {"value": "13304", "label": "望江"}, {"value": "13281", "label": "宿松"}, {
							"value": "13174",
							"label": "迎江"
						}, {"value": "13196", "label": "宜秀"}, {"value": "13315", "label": "岳西"}]
					}, {
						"value": "12907",
						"label": "蚌埠",
						"children": [{"value": "12917", "label": "蚌山"}, {"value": "12973", "label": "固镇"}, {
							"value": "12932",
							"label": "淮上"
						}, {"value": "12938", "label": "怀远"}, {"value": "12908", "label": "龙子湖"}, {
							"value": "12957",
							"label": "五河"
						}, {"value": "12927", "label": "禹会"}]
					}, {
						"value": "14052",
						"label": "亳州",
						"children": [{"value": "14122", "label": "利辛"}, {"value": "14104", "label": "蒙城"}, {
							"value": "14053",
							"label": "谯城"
						}, {"value": "14079", "label": "涡阳"}]
					}, {
						"value": "13469",
						"label": "滁州",
						"children": [{"value": "13516", "label": "定远"}, {"value": "13539", "label": "凤阳"}, {
							"value": "13470",
							"label": "琅琊"
						}, {"value": "13492", "label": "来安"}, {"value": "13572", "label": "明光"}, {
							"value": "13481",
							"label": "南谯"
						}, {"value": "13505", "label": "全椒"}, {"value": "13555", "label": "天长"}]
					}, {
						"value": "14146",
						"label": "池州",
						"children": [{"value": "14168", "label": "东至"}, {"value": "14147", "label": "贵池"}, {
							"value": "14193",
							"label": "青阳"
						}, {"value": "14184", "label": "石台"}]
					}, {
						"value": "13590",
						"label": "阜阳",
						"children": [{"value": "13689", "label": "阜南"}, {"value": "13750", "label": "界首"}, {
							"value": "13625",
							"label": "临泉"
						}, {"value": "13657", "label": "太和"}, {"value": "13591", "label": "颍州"}, {
							"value": "13605",
							"label": "颍东"
						}, {"value": "13618", "label": "颍泉"}, {"value": "13719", "label": "颍上"}]
					}, {
						"value": "12702",
						"label": "合肥",
						"children": [{"value": "12743", "label": "包河"}, {"value": "12753", "label": "长丰"}, {
							"value": "12820",
							"label": "巢湖"
						}, {"value": "12768", "label": "肥东"}, {"value": "12787", "label": "肥西"}, {
							"value": "12720",
							"label": "庐阳"
						}, {"value": "12802", "label": "庐江"}, {"value": "12731", "label": "蜀山"}, {"value": "12703", "label": "瑶海"}]
					}, {
						"value": "12985",
						"label": "淮南",
						"children": [{"value": "13019", "label": "八公山"}, {"value": "12986", "label": "大通"}, {
							"value": "13037",
							"label": "凤台"
						}, {"value": "13025", "label": "潘集"}, {"value": "12992", "label": "田家庵"}, {
							"value": "13007",
							"label": "谢家集"
						}]
					}, {
						"value": "13112",
						"label": "淮北",
						"children": [{"value": "13113", "label": "杜集"}, {"value": "13131", "label": "烈山"}, {
							"value": "13139",
							"label": "濉溪"
						}, {"value": "13119", "label": "相山"}]
					}, {
						"value": "13356",
						"label": "黄山",
						"children": [{"value": "13367", "label": "黄山"}, {"value": "13382", "label": "徽州"}, {
							"value": "13450",
							"label": "祁门"
						}, {"value": "13357", "label": "屯溪"}, {"value": "13391", "label": "歙县"}, {
							"value": "13419",
							"label": "休宁"
						}, {"value": "13441", "label": "黟县"}]
					}, {
						"value": "13880",
						"label": "六安",
						"children": [{"value": "13953", "label": "霍邱"}, {"value": "14035", "label": "霍山"}, {
							"value": "13881",
							"label": "金安"
						}, {"value": "14011", "label": "金寨"}, {"value": "13927", "label": "寿县"}, {
							"value": "13989",
							"label": "舒城"
						}, {"value": "13904", "label": "裕安"}]
					}, {
						"value": "13057",
						"label": "马鞍山",
						"children": [{"value": "13077", "label": "博望"}, {"value": "13081", "label": "当涂"}, {
							"value": "13058",
							"label": "花山"
						}, {"value": "13093", "label": "含山"}, {"value": "13102", "label": "和县"}, {"value": "13069", "label": "雨山"}]
					}, {
						"value": "13151",
						"label": "铜陵",
						"children": [{"value": "13158", "label": "郊区"}, {"value": "13154", "label": "狮子山"}, {
							"value": "13152",
							"label": "铜官山"
						}, {"value": "13164", "label": "铜陵"}]
					}, {
						"value": "12837",
						"label": "芜湖",
						"children": [{"value": "12869", "label": "繁昌"}, {"value": "12838", "label": "镜湖"}, {
							"value": "12847",
							"label": "鸠江"
						}, {"value": "12876", "label": "南陵"}, {"value": "12858", "label": "三山"}, {
							"value": "12864",
							"label": "芜湖"
						}, {"value": "12885", "label": "无为"}, {"value": "12840", "label": "弋江"}]
					}, {
						"value": "13769",
						"label": "宿州",
						"children": [{"value": "13806", "label": "砀山"}, {"value": "13844", "label": "灵璧"}, {
							"value": "13864",
							"label": "泗县"
						}, {"value": "13821", "label": "萧县"}, {"value": "13770", "label": "埇桥"}]
					}, {
						"value": "14207",
						"label": "宣城",
						"children": [{"value": "14245", "label": "广德"}, {"value": "14255", "label": "泾县"}, {
							"value": "14267",
							"label": "绩溪"
						}, {"value": "14279", "label": "旌德"}, {"value": "14235", "label": "郎溪"}, {
							"value": "14290",
							"label": "宁国"
						}, {"value": "14208", "label": "宣州"}]
					}]
				}, {
					"value": "43458",
					"label": "澳门",
					"children": [{
						"value": "43481",
						"label": "澳门半岛",
						"children": [{"value": "43484", "label": "大堂区"}, {"value": "43486", "label": "风顺堂区"}, {
							"value": "43482",
							"label": "花地玛堂区"
						}, {"value": "43483", "label": "圣安多尼堂区"}, {"value": "43485", "label": "望德堂区"}]
					}, {
						"value": "43487",
						"label": "离岛",
						"children": [{"value": "43488", "label": "氹仔"}, {"value": "43489", "label": "路环"}]
					}]
				}, {
					"value": "47138",
					"label": "北京",
					"children": [{
						"value": "2",
						"label": "北京",
						"children": [{"value": "63", "label": "朝阳"}, {"value": "252", "label": "昌平"}, {
							"value": "33",
							"label": "东城"
						}, {"value": "273", "label": "大兴"}, {"value": "106", "label": "丰台"}, {
							"value": "182",
							"label": "房山"
						}, {"value": "138", "label": "海淀"}, {"value": "293", "label": "怀柔"}, {
							"value": "168",
							"label": "门头沟"
						}, {"value": "329", "label": "密云"}, {"value": "310", "label": "平谷"}, {
							"value": "128",
							"label": "石景山"
						}, {"value": "226", "label": "顺义"}, {"value": "211", "label": "通州"}, {
							"value": "49",
							"label": "西城"
						}, {"value": "350", "label": "延庆"}]
					}]
				}, {
					"value": "47140",
					"label": "重庆",
					"children": [{
						"value": "23",
						"label": "重庆",
						"children": [{"value": "29022", "label": "北碚"}, {"value": "29126", "label": "巴南"}, {
							"value": "29392",
							"label": "璧山"
						}, {"value": "29180", "label": "长寿"}, {"value": "29440", "label": "城口"}, {
							"value": "28941",
							"label": "大渡口"
						}, {"value": "29071", "label": "大足"}, {"value": "29497", "label": "垫江"}, {
							"value": "28901",
							"label": "涪陵"
						}, {"value": "29466", "label": "丰都"}, {"value": "29663", "label": "奉节"}, {
							"value": "29228",
							"label": "合川"
						}, {"value": "28950", "label": "江北"}, {"value": "28987", "label": "九龙坡"}, {
							"value": "29199",
							"label": "江津"
						}, {"value": "29579", "label": "开县"}, {"value": "29408", "label": "梁平"}, {
							"value": "29006",
							"label": "南岸"
						}, {"value": "29283", "label": "南川"}, {"value": "29854", "label": "彭水"}, {
							"value": "29040",
							"label": "綦江"
						}, {"value": "29149", "label": "黔江"}, {"value": "29370", "label": "荣昌"}, {
							"value": "28960",
							"label": "沙坪坝"
						}, {"value": "29754", "label": "石柱"}, {"value": "29318", "label": "潼南"}, {
							"value": "29341",
							"label": "铜梁"
						}, {"value": "28849", "label": "万州"}, {"value": "29523", "label": "武隆"}, {
							"value": "29694",
							"label": "巫山"
						}, {"value": "29721", "label": "巫溪"}, {"value": "29787", "label": "秀山"}, {
							"value": "28928",
							"label": "渝中"
						}, {"value": "29099", "label": "渝北"}, {"value": "29259", "label": "永川"}, {
							"value": "29620",
							"label": "云阳"
						}, {"value": "29815", "label": "酉阳"}, {"value": "29550", "label": "忠县"}]
					}]
				}, {
					"value": "14",
					"label": "福建",
					"children": [{
						"value": "14310",
						"label": "福州",
						"children": [{"value": "14333", "label": "仓山"}, {"value": "14494", "label": "长乐"}, {
							"value": "14467",
							"label": "福清"
						}, {"value": "14311", "label": "鼓楼"}, {"value": "14352", "label": "晋安"}, {
							"value": "14378",
							"label": "连江"
						}, {"value": "14400", "label": "罗源"}, {"value": "14347", "label": "马尾"}, {
							"value": "14362",
							"label": "闽侯"
						}, {"value": "14413", "label": "闽清"}, {"value": "14451", "label": "平潭"}, {
							"value": "14322",
							"label": "台江"
						}, {"value": "14430", "label": "永泰"}]
					}, {
						"value": "15228",
						"label": "龙岩",
						"children": [{"value": "15250", "label": "长汀"}, {"value": "15335", "label": "连城"}, {
							"value": "15294",
							"label": "上杭"
						}, {"value": "15317", "label": "武平"}, {"value": "15229", "label": "新罗"}, {
							"value": "15269",
							"label": "永定"
						}, {"value": "15353", "label": "漳平"}]
					}, {
						"value": "15078",
						"label": "南平",
						"children": [{"value": "15134", "label": "光泽"}, {"value": "15195", "label": "建瓯"}, {
							"value": "15214",
							"label": "建阳"
						}, {"value": "15114", "label": "浦城"}, {"value": "15101", "label": "顺昌"}, {
							"value": "15143",
							"label": "松溪"
						}, {"value": "15164", "label": "邵武"}, {"value": "15184", "label": "武夷山"}, {
							"value": "15079",
							"label": "延平"
						}, {"value": "15153", "label": "政和"}]
					}, {
						"value": "15370",
						"label": "宁德",
						"children": [{"value": "15465", "label": "福安"}, {"value": "15488", "label": "福鼎"}, {
							"value": "15403",
							"label": "古田"
						}, {"value": "15371", "label": "蕉城"}, {"value": "15418", "label": "屏南"}, {
							"value": "15430",
							"label": "寿宁"
						}, {"value": "15388", "label": "霞浦"}, {"value": "15445", "label": "周宁"}, {"value": "15455", "label": "柘荣"}]
					}, {
						"value": "14556",
						"label": "莆田",
						"children": [{"value": "14557", "label": "城厢"}, {"value": "14565", "label": "涵江"}, {
							"value": "14577",
							"label": "荔城"
						}, {"value": "14584", "label": "秀屿"}, {"value": "14596", "label": "仙游"}]
					}, {
						"value": "14770",
						"label": "泉州",
						"children": [{"value": "14820", "label": "安溪"}, {"value": "14868", "label": "德化"}, {
							"value": "14780",
							"label": "丰泽"
						}, {"value": "14804", "label": "惠安"}, {"value": "14887", "label": "金门"}, {
							"value": "14898",
							"label": "晋江"
						}, {"value": "14771", "label": "鲤城"}, {"value": "14789", "label": "洛江"}, {
							"value": "14918",
							"label": "南安"
						}, {"value": "14796", "label": "泉港"}, {"value": "14888", "label": "石狮"}, {"value": "14845", "label": "永春"}]
					}, {
						"value": "14615",
						"label": "三明",
						"children": [{"value": "14672", "label": "大田"}, {"value": "14720", "label": "将乐"}, {
							"value": "14744",
							"label": "建宁"
						}, {"value": "14616", "label": "梅列"}, {"value": "14631", "label": "明溪"}, {
							"value": "14655",
							"label": "宁化"
						}, {"value": "14641", "label": "清流"}, {"value": "14622", "label": "三元"}, {
							"value": "14707",
							"label": "沙县"
						}, {"value": "14734", "label": "泰宁"}, {"value": "14691", "label": "尤溪"}, {"value": "14754", "label": "永安"}]
					}, {
						"value": "14513",
						"label": "厦门",
						"children": [{"value": "14524", "label": "海沧"}, {"value": "14528", "label": "湖里"}, {
							"value": "14534",
							"label": "集美"
						}, {"value": "14514", "label": "思明"}, {"value": "14541", "label": "同安"}, {"value": "14550", "label": "翔安"}]
					}, {
						"value": "14946",
						"label": "漳州",
						"children": [{"value": "15011", "label": "长泰"}, {"value": "15017", "label": "东山"}, {
							"value": "15053",
							"label": "华安"
						}, {"value": "14958", "label": "龙文"}, {"value": "15063", "label": "龙海"}, {
							"value": "15025",
							"label": "南靖"
						}, {"value": "15037", "label": "平和"}, {"value": "14947", "label": "芗城"}, {
							"value": "14963",
							"label": "云霄"
						}, {"value": "14973", "label": "漳浦"}, {"value": "14995", "label": "诏安"}]
					}]
				}, {
					"value": "20",
					"label": "广东",
					"children": [{
						"value": "27029",
						"label": "潮州",
						"children": [{"value": "27044", "label": "潮安"}, {"value": "27061", "label": "饶平"}, {
							"value": "27030",
							"label": "湘桥"
						}]
					}, {"value": "27027", "label": "东莞"}, {
						"value": "26031",
						"label": "佛山",
						"children": [{"value": "26032", "label": "禅城"}, {"value": "26064", "label": "高明"}, {
							"value": "26037",
							"label": "南海"
						}, {"value": "26045", "label": "顺德"}, {"value": "26056", "label": "三水"}]
					}, {
						"value": "25566",
						"label": "广州",
						"children": [{"value": "25650", "label": "白云"}, {"value": "25734", "label": "从化"}, {
							"value": "25679",
							"label": "番禺"
						}, {"value": "25609", "label": "海珠"}, {"value": "25669", "label": "黄埔"}, {
							"value": "25696",
							"label": "花都"
						}, {"value": "25567", "label": "荔湾"}, {"value": "25715", "label": "萝岗"}, {
							"value": "25705",
							"label": "南沙"
						}, {"value": "25628", "label": "天河"}, {"value": "25590", "label": "越秀"}, {"value": "25722", "label": "增城"}]
					}, {
						"value": "26515",
						"label": "惠州",
						"children": [{"value": "26545", "label": "博罗"}, {"value": "26516", "label": "惠城"}, {
							"value": "26535",
							"label": "惠阳"
						}, {"value": "26564", "label": "惠东"}, {"value": "26579", "label": "龙门"}]
					}, {
						"value": "26771",
						"label": "河源",
						"children": [{"value": "26856", "label": "东源"}, {"value": "26838", "label": "和平"}, {
							"value": "26799",
							"label": "龙川"
						}, {"value": "26824", "label": "连平"}, {"value": "26772", "label": "源城"}, {"value": "26780", "label": "紫金"}]
					}, {
						"value": "26069",
						"label": "江门",
						"children": [{"value": "26144", "label": "恩平"}, {"value": "26133", "label": "鹤山"}, {
							"value": "26080",
							"label": "江海"
						}, {"value": "26116", "label": "开平"}, {"value": "26070", "label": "蓬江"}, {
							"value": "26098",
							"label": "台山"
						}, {"value": "26086", "label": "新会"}]
					}, {
						"value": "27083",
						"label": "揭阳",
						"children": [{"value": "27131", "label": "惠来"}, {"value": "27099", "label": "揭东"}, {
							"value": "27113",
							"label": "揭西"
						}, {"value": "27146", "label": "普宁"}, {"value": "27084", "label": "榕城"}]
					}, {
						"value": "26287",
						"label": "茂名",
						"children": [{"value": "26312", "label": "电白"}, {"value": "26330", "label": "高州"}, {
							"value": "26359",
							"label": "化州"
						}, {"value": "26288", "label": "茂南"}, {"value": "26304", "label": "茂港"}, {"value": "26382", "label": "信宜"}]
					}, {
						"value": "26590",
						"label": "梅州",
						"children": [{"value": "26620", "label": "大埔"}, {"value": "26635", "label": "丰顺"}, {
							"value": "26682",
							"label": "蕉岭"
						}, {"value": "26591", "label": "梅江"}, {"value": "26599", "label": "梅县"}, {
							"value": "26669",
							"label": "平远"
						}, {"value": "26652", "label": "五华"}, {"value": "26691", "label": "兴宁"}]
					}, {
						"value": "26933",
						"label": "清远",
						"children": [{"value": "26952", "label": "佛冈"}, {"value": "26973", "label": "连山"}, {
							"value": "26981",
							"label": "连南"
						}, {"value": "27014", "label": "连州"}, {"value": "26934", "label": "清城"}, {
							"value": "26943",
							"label": "清"
						}, {"value": "26959", "label": "阳山"}, {"value": "26989", "label": "英德"}]
					}, {
						"value": "25743",
						"label": "韶关",
						"children": [{"value": "25823", "label": "乐昌"}, {"value": "25843", "label": "南雄"}, {
							"value": "25763",
							"label": "曲江"
						}, {"value": "25785", "label": "仁化"}, {"value": "25805", "label": "乳源"}, {
							"value": "25774",
							"label": "始兴"
						}, {"value": "25744", "label": "武江"}, {"value": "25797", "label": "翁源"}, {
							"value": "25815",
							"label": "新丰"
						}, {"value": "25752", "label": "浈江"}]
					}, {
						"value": "25862",
						"label": "深圳",
						"children": [{"value": "25894", "label": "宝安"}, {"value": "25874", "label": "福田"}, {
							"value": "25863",
							"label": "罗湖"
						}, {"value": "25907", "label": "龙岗"}, {"value": "25885", "label": "南山"}, {"value": "25921", "label": "盐田"}]
					}, {
						"value": "25954",
						"label": "汕头",
						"children": [{"value": "25989", "label": "潮阳"}, {"value": "26003", "label": "潮南"}, {
							"value": "26015",
							"label": "澄海"
						}, {"value": "25981", "label": "濠江"}, {"value": "25963", "label": "金平"}, {
							"value": "25955",
							"label": "龙湖"
						}, {"value": "26027", "label": "南澳"}]
					}, {
						"value": "26712",
						"label": "汕尾",
						"children": [{"value": "26713", "label": "城区"}, {"value": "26724", "label": "海丰"}, {
							"value": "26741",
							"label": "陆河"
						}, {"value": "26750", "label": "陆丰"}]
					}, {
						"value": "26878",
						"label": "阳江",
						"children": [{"value": "26879", "label": "江城"}, {"value": "26893", "label": "阳西"}, {
							"value": "26902",
							"label": "阳东"
						}, {"value": "26914", "label": "阳春"}]
					}, {
						"value": "27173",
						"label": "云浮",
						"children": [{"value": "27220", "label": "罗定"}, {"value": "27182", "label": "新兴"}, {
							"value": "27174",
							"label": "云城"
						}, {"value": "27195", "label": "郁南"}, {"value": "27211", "label": "云安"}]
					}, {
						"value": "25926",
						"label": "珠海",
						"children": [{"value": "25942", "label": "斗门"}, {"value": "25949", "label": "金湾"}, {
							"value": "25927",
							"label": "香洲"
						}]
					}, {
						"value": "26156",
						"label": "湛江",
						"children": [{"value": "26157", "label": "赤坎"}, {"value": "26227", "label": "廉江"}, {
							"value": "26249",
							"label": "雷州"
						}, {"value": "26187", "label": "麻章"}, {"value": "26179", "label": "坡头"}, {
							"value": "26195",
							"label": "遂溪"
						}, {"value": "26271", "label": "吴川"}, {"value": "26166", "label": "霞山"}, {"value": "26211", "label": "徐闻"}]
					}, {
						"value": "26402",
						"label": "肇庆",
						"children": [{"value": "26403", "label": "端州"}, {"value": "26408", "label": "鼎湖"}, {
							"value": "26469",
							"label": "德庆"
						}, {"value": "26452", "label": "封开"}, {"value": "26416", "label": "广宁"}, {
							"value": "26483",
							"label": "高要"
						}, {"value": "26432", "label": "怀集"}, {"value": "26501", "label": "四会"}]
					}, {"value": "27028", "label": "中山"}]
				}, {
					"value": "21",
					"label": "广西",
					"children": [{
						"value": "27745",
						"label": "北海",
						"children": [{"value": "27746", "label": "海城"}, {"value": "27764", "label": "合浦"}, {
							"value": "27760",
							"label": "铁山港"
						}, {"value": "27755", "label": "银海"}]
					}, {
						"value": "28075",
						"label": "百色",
						"children": [{"value": "28122", "label": "德保"}, {"value": "28136", "label": "靖西"}, {
							"value": "28166",
							"label": "凌云"
						}, {"value": "28175", "label": "乐业"}, {"value": "28208", "label": "隆林"}, {
							"value": "28156",
							"label": "那坡"
						}, {"value": "28108", "label": "平果"}, {"value": "28086", "label": "田阳"}, {
							"value": "28097",
							"label": "田东"
						}, {"value": "28184", "label": "田林"}, {"value": "28199", "label": "西林"}, {"value": "28076", "label": "右江"}]
					}, {
						"value": "28511",
						"label": "崇左",
						"children": [{"value": "28563", "label": "大新"}, {"value": "28524", "label": "扶绥"}, {
							"value": "28512",
							"label": "江州"
						}, {"value": "28550", "label": "龙州"}, {"value": "28536", "label": "宁明"}, {
							"value": "28592",
							"label": "凭祥"
						}, {"value": "28578", "label": "天等"}]
					}, {
						"value": "27780",
						"label": "防城港",
						"children": [{"value": "27806", "label": "东兴"}, {"value": "27787", "label": "防城"}, {
							"value": "27781",
							"label": "港口"
						}, {"value": "27797", "label": "上思"}]
					}, {
						"value": "27508",
						"label": "桂林",
						"children": [{"value": "27513", "label": "叠彩"}, {"value": "27608", "label": "灌阳"}, {
							"value": "27662",
							"label": "恭城"
						}, {"value": "27534", "label": "临桂"}, {"value": "27556", "label": "灵川"}, {
							"value": "27618",
							"label": "龙胜"
						}, {"value": "27648", "label": "荔浦"}, {"value": "27637", "label": "平乐"}, {
							"value": "27522",
							"label": "七星"
						}, {"value": "27568", "label": "全州"}, {"value": "27509", "label": "秀峰"}, {
							"value": "27517",
							"label": "象山"
						}, {"value": "27587", "label": "兴安"}, {"value": "27528", "label": "雁山"}, {
							"value": "27546",
							"label": "阳朔"
						}, {"value": "27598", "label": "永福"}, {"value": "27629", "label": "资源"}]
					}, {
						"value": "27877",
						"label": "贵港",
						"children": [{"value": "27878", "label": "港北"}, {"value": "27887", "label": "港南"}, {
							"value": "27930",
							"label": "桂平"
						}, {"value": "27908", "label": "平南"}, {"value": "27897", "label": "覃塘"}]
					}, {
						"value": "28225",
						"label": "贺州",
						"children": [{"value": "28226", "label": "八步"}, {"value": "28269", "label": "富川"}, {
							"value": "28243",
							"label": "昭平"
						}, {"value": "28256", "label": "钟山"}]
					}, {
						"value": "28282",
						"label": "河池",
						"children": [{"value": "28368", "label": "巴马"}, {"value": "28328", "label": "东兰"}, {
							"value": "28379",
							"label": "都安"
						}, {"value": "28399", "label": "大化"}, {"value": "28318", "label": "凤山"}, {
							"value": "28355",
							"label": "环江"
						}, {"value": "28283", "label": "金城江"}, {"value": "28343", "label": "罗城"}, {
							"value": "28296",
							"label": "南丹"
						}, {"value": "28308", "label": "天峨"}, {"value": "28416", "label": "宜州"}]
					}, {
						"value": "27381",
						"label": "柳州",
						"children": [{"value": "27382", "label": "城中"}, {"value": "27401", "label": "柳南"}, {
							"value": "27411",
							"label": "柳北"
						}, {"value": "27422", "label": "柳江"}, {"value": "27435", "label": "柳城"}, {
							"value": "27448",
							"label": "鹿寨"
						}, {"value": "27458", "label": "融安"}, {"value": "27471", "label": "融水"}, {
							"value": "27492",
							"label": "三江"
						}, {"value": "27390", "label": "鱼峰"}]
					}, {
						"value": "28433",
						"label": "来宾",
						"children": [{"value": "28507", "label": "合山"}, {"value": "28496", "label": "金秀"}, {
							"value": "28485",
							"label": "武宣"
						}, {"value": "28434", "label": "兴宾"}, {"value": "28460", "label": "忻城"}, {"value": "28473", "label": "象州"}]
					}, {
						"value": "27242",
						"label": "南宁",
						"children": [{"value": "27346", "label": "宾阳"}, {"value": "27363", "label": "横县"}, {
							"value": "27259",
							"label": "江南"
						}, {"value": "27283", "label": "良庆"}, {"value": "27311", "label": "隆安"}, {
							"value": "27322",
							"label": "马山"
						}, {"value": "27249", "label": "青秀"}, {"value": "27334", "label": "上林"}, {
							"value": "27297",
							"label": "武鸣"
						}, {"value": "27243", "label": "兴宁"}, {"value": "27269", "label": "西乡塘"}, {"value": "27291", "label": "邕宁"}]
					}, {
						"value": "27810",
						"label": "钦州",
						"children": [{"value": "27843", "label": "灵山"}, {"value": "27862", "label": "浦北"}, {
							"value": "27811",
							"label": "钦南"
						}, {"value": "27828", "label": "钦北"}]
					}, {
						"value": "27672",
						"label": "梧州",
						"children": [{"value": "27684", "label": "长洲"}, {"value": "27694", "label": "苍梧"}, {
							"value": "27730",
							"label": "岑溪"
						}, {"value": "27689", "label": "龙圩"}, {"value": "27720", "label": "蒙山"}, {
							"value": "27704",
							"label": "藤县"
						}, {"value": "27673", "label": "万秀"}]
					}, {
						"value": "27957",
						"label": "玉林",
						"children": [{"value": "28006", "label": "博白"}, {"value": "28049", "label": "北流"}, {
							"value": "27968",
							"label": "福绵"
						}, {"value": "27991", "label": "陆川"}, {"value": "27975", "label": "容县"}, {
							"value": "28035",
							"label": "兴业"
						}, {"value": "27958", "label": "玉州"}]
					}]
				}, {
					"value": "25",
					"label": "贵州",
					"children": [{
						"value": "35202",
						"label": "安顺",
						"children": [{"value": "35269", "label": "关岭"}, {"value": "35228", "label": "平坝"}, {
							"value": "35240",
							"label": "普定"
						}, {"value": "35203", "label": "西秀"}, {"value": "35252", "label": "镇宁"}, {"value": "35284", "label": "紫云"}]
					}, {
						"value": "35297",
						"label": "毕节",
						"children": [{"value": "35344", "label": "大方"}, {"value": "35534", "label": "赫章"}, {
							"value": "35412",
							"label": "金沙"
						}, {"value": "35471", "label": "纳雍"}, {"value": "35298", "label": "七星关"}, {
							"value": "35381",
							"label": "黔西"
						}, {"value": "35498", "label": "威宁"}, {"value": "35438", "label": "织金"}]
					}, {
						"value": "34747",
						"label": "贵阳",
						"children": [{"value": "34776", "label": "白云"}, {"value": "34782", "label": "观山湖"}, {
							"value": "34755",
							"label": "花溪"
						}, {"value": "34786", "label": "开阳"}, {"value": "34748", "label": "南明"}, {
							"value": "34825",
							"label": "清镇"
						}, {"value": "34767", "label": "乌当"}, {"value": "34803", "label": "息烽"}, {
							"value": "34814",
							"label": "修文"
						}, {"value": "34753", "label": "云岩"}]
					}, {
						"value": "34835",
						"label": "六盘水",
						"children": [{"value": "34849", "label": "六枝特"}, {"value": "34903", "label": "盘县"}, {
							"value": "34869",
							"label": "水城"
						}, {"value": "34836", "label": "钟山"}]
					}, {
						"value": "35743",
						"label": "黔西南",
						"children": [{"value": "35872", "label": "安龙"}, {"value": "35857", "label": "册亨"}, {
							"value": "35794",
							"label": "普安"
						}, {"value": "35809", "label": "晴隆"}, {"value": "35838", "label": "望谟"}, {
							"value": "35744",
							"label": "兴义"
						}, {"value": "35775", "label": "兴仁"}, {"value": "35824", "label": "贞丰"}]
					}, {
						"value": "35890",
						"label": "黔东南",
						"children": [{"value": "35952", "label": "岑巩"}, {"value": "36063", "label": "从江"}, {
							"value": "36103",
							"label": "丹寨"
						}, {"value": "35908", "label": "黄平"}, {"value": "35980", "label": "锦屏"}, {
							"value": "35996",
							"label": "剑河"
						}, {"value": "35891", "label": "凯里"}, {"value": "36017", "label": "黎平"}, {
							"value": "36085",
							"label": "雷山"
						}, {"value": "36094", "label": "麻江"}, {"value": "36043", "label": "榕江"}, {
							"value": "35920",
							"label": "施秉"
						}, {"value": "35929", "label": "三穗"}, {"value": "35963", "label": "天柱"}, {
							"value": "36008",
							"label": "台江"
						}, {"value": "35939", "label": "镇远"}]
					}, {
						"value": "36110",
						"label": "黔南",
						"children": [{"value": "36261", "label": "长顺"}, {"value": "36111", "label": "都匀"}, {
							"value": "36205",
							"label": "独山"
						}, {"value": "36134", "label": "福泉"}, {"value": "36170", "label": "贵定"}, {
							"value": "36293",
							"label": "惠水"
						}, {"value": "36152", "label": "荔波"}, {"value": "36234", "label": "罗甸"}, {
							"value": "36279",
							"label": "龙里"
						}, {"value": "36214", "label": "平塘"}, {"value": "36319", "label": "三都"}, {"value": "36191", "label": "瓮安"}]
					}, {
						"value": "35562",
						"label": "铜仁",
						"children": [{"value": "35563", "label": "碧江"}, {"value": "35669", "label": "德江"}, {
							"value": "35587",
							"label": "江口"
						}, {"value": "35604", "label": "石阡"}, {"value": "35623", "label": "思南"}, {
							"value": "35714",
							"label": "松桃"
						}, {"value": "35577", "label": "万山"}, {"value": "35597", "label": "玉屏"}, {
							"value": "35651",
							"label": "印江"
						}, {"value": "35691", "label": "沿河"}]
					}, {
						"value": "34943",
						"label": "遵义",
						"children": [{"value": "35162", "label": "赤水"}, {"value": "35064", "label": "道真"}, {
							"value": "35094",
							"label": "凤冈"
						}, {"value": "34944", "label": "红花岗"}, {"value": "34961", "label": "汇川"}, {
							"value": "35109",
							"label": "湄潭"
						}, {"value": "35180", "label": "仁怀"}, {"value": "35028", "label": "绥阳"}, {
							"value": "35003",
							"label": "桐梓"
						}, {"value": "35078", "label": "务川"}, {"value": "35138", "label": "习水"}, {
							"value": "35127",
							"label": "余庆"
						}, {"value": "34971", "label": "遵义"}, {"value": "35044", "label": "正安"}]
					}]
				}, {
					"value": "29",
					"label": "甘肃",
					"children": [{
						"value": "40307",
						"label": "白银",
						"children": [{"value": "40308", "label": "白银"}, {"value": "40350", "label": "会宁"}, {
							"value": "40331",
							"label": "靖远"
						}, {"value": "40379", "label": "景泰"}, {"value": "40319", "label": "平川"}]
					}, {
						"value": "41028",
						"label": "定西",
						"children": [{"value": "41029", "label": "安定"}, {"value": "41070", "label": "陇西"}, {
							"value": "41105",
							"label": "临洮"
						}, {"value": "41138", "label": "岷县"}, {"value": "41051", "label": "通渭"}, {
							"value": "41088",
							"label": "渭源"
						}, {"value": "41124", "label": "漳县"}]
					}, {
						"value": "41499",
						"label": "甘南",
						"children": [{"value": "41564", "label": "迭部"}, {"value": "41500", "label": "合作"}, {
							"value": "41511",
							"label": "临潭"
						}, {"value": "41585", "label": "碌曲"}, {"value": "41576", "label": "玛曲"}, {
							"value": "41593",
							"label": "夏河"
						}, {"value": "41528", "label": "卓尼"}, {"value": "41544", "label": "舟曲"}]
					}, {"value": "40279", "label": "嘉峪关"}, {
						"value": "40286",
						"label": "金昌",
						"children": [{"value": "40287", "label": "金川"}, {"value": "40296", "label": "永昌"}]
					}, {
						"value": "40817",
						"label": "酒泉",
						"children": [{"value": "40872", "label": "阿克塞"}, {"value": "40890", "label": "敦煌"}, {
							"value": "40851",
							"label": "瓜州"
						}, {"value": "40839", "label": "金塔"}, {"value": "40818", "label": "肃州"}, {
							"value": "40867",
							"label": "肃北"
						}, {"value": "40876", "label": "玉门"}]
					}, {
						"value": "40154",
						"label": "兰州",
						"children": [{"value": "40212", "label": "安宁"}, {"value": "40155", "label": "城关"}, {
							"value": "40247",
							"label": "皋兰"
						}, {"value": "40221", "label": "红古"}, {"value": "40180", "label": "七里河"}, {
							"value": "40196",
							"label": "西固"
						}, {"value": "40228", "label": "永登"}, {"value": "40255", "label": "榆中"}]
					}, {
						"value": "41157",
						"label": "陇南",
						"children": [{"value": "41195", "label": "成县"}, {"value": "41234", "label": "宕昌"}, {
							"value": "41333",
							"label": "徽县"
						}, {"value": "41260", "label": "康县"}, {"value": "41303", "label": "礼县"}, {
							"value": "41349",
							"label": "两当"
						}, {"value": "41158", "label": "武都"}, {"value": "41213", "label": "文县"}, {"value": "41282", "label": "西和"}]
					}, {
						"value": "41362",
						"label": "临夏",
						"children": [{"value": "41457", "label": "东乡族"}, {"value": "41433", "label": "广河"}, {
							"value": "41443",
							"label": "和政"
						}, {"value": "41482", "label": "积石山"}, {"value": "41399", "label": "康乐"}, {
							"value": "41363",
							"label": "临夏"
						}, {"value": "41373", "label": "临夏"}, {"value": "41415", "label": "永靖"}]
					}, {
						"value": "40701",
						"label": "平凉",
						"children": [{"value": "40751", "label": "崇信"}, {"value": "40759", "label": "华亭"}, {
							"value": "40723",
							"label": "泾川"
						}, {"value": "40791", "label": "静宁"}, {"value": "40702", "label": "崆峒"}, {
							"value": "40737",
							"label": "灵台"
						}, {"value": "40771", "label": "庄浪"}]
					}, {
						"value": "40900",
						"label": "庆阳",
						"children": [{"value": "40928", "label": "环县"}, {"value": "40949", "label": "华池"}, {
							"value": "40965",
							"label": "合水"
						}, {"value": "40989", "label": "宁县"}, {"value": "40912", "label": "庆城"}, {
							"value": "40901",
							"label": "西峰"
						}, {"value": "40978", "label": "正宁"}, {"value": "41008", "label": "镇原"}]
					}, {
						"value": "40392",
						"label": "天水",
						"children": [{"value": "40475", "label": "甘谷"}, {"value": "40417", "label": "麦积"}, {
							"value": "40393",
							"label": "秦州"
						}, {"value": "40438", "label": "清水"}, {"value": "40457", "label": "秦安"}, {
							"value": "40491",
							"label": "武山"
						}, {"value": "40507", "label": "张家川"}]
					}, {
						"value": "40523",
						"label": "武威",
						"children": [{"value": "40589", "label": "古浪"}, {"value": "40524", "label": "凉州"}, {
							"value": "40570",
							"label": "民勤"
						}, {"value": "40609", "label": "天祝"}]
					}, {
						"value": "40629",
						"label": "张掖",
						"children": [{"value": "40630", "label": "甘州"}, {"value": "40682", "label": "高台"}, {
							"value": "40674",
							"label": "临泽"
						}, {"value": "40663", "label": "民乐"}, {"value": "40655", "label": "肃南裕"}, {"value": "40692", "label": "山丹"}]
					}]
				}, {
					"value": "4",
					"label": "河北",
					"children": [{
						"value": "1741",
						"label": "保定",
						"children": [{"value": "1935", "label": "安新"}, {"value": "2079", "label": "安国"}, {
							"value": "1754",
							"label": "北市"
						}, {"value": "2020", "label": "博野"}, {"value": "1851", "label": "定兴"}, {
							"value": "2053",
							"label": "定州"
						}, {"value": "1822", "label": "阜平"}, {"value": "1889", "label": "高阳"}, {
							"value": "2091",
							"label": "高碑店"
						}, {"value": "1806", "label": "涞水"}, {"value": "1908", "label": "涞源"}, {
							"value": "1995",
							"label": "蠡县"
						}, {"value": "1773", "label": "满城"}, {"value": "1763", "label": "南市"}, {
							"value": "1787",
							"label": "清苑"
						}, {"value": "1976", "label": "曲阳"}, {"value": "1899", "label": "容城"}, {
							"value": "2009",
							"label": "顺平"
						}, {"value": "1868", "label": "唐县"}, {"value": "1926", "label": "望都"}, {
							"value": "1742",
							"label": "新市"
						}, {"value": "1836", "label": "徐水"}, {"value": "2028", "label": "雄县"}, {
							"value": "1948",
							"label": "易县"
						}, {"value": "2038", "label": "涿州"}]
					}, {
						"value": "2360",
						"label": "承德",
						"children": [{"value": "2390", "label": "承德"}, {"value": "2502", "label": "丰宁"}, {
							"value": "2529",
							"label": "宽城"
						}, {"value": "2454", "label": "滦平"}, {"value": "2476", "label": "隆化"}, {
							"value": "2435",
							"label": "平泉"
						}, {"value": "2361", "label": "双桥"}, {"value": "2376", "label": "双滦"}, {
							"value": "2548",
							"label": "围场"
						}, {"value": "2414", "label": "兴隆"}, {"value": "2385", "label": "鹰手营子矿"}]
					}, {
						"value": "2586",
						"label": "沧州",
						"children": [{"value": "2721", "label": "泊头"}, {"value": "2603", "label": "沧县"}, {
							"value": "2634",
							"label": "东光"
						}, {"value": "2644", "label": "海兴"}, {"value": "2756", "label": "黄骅"}, {
							"value": "2771",
							"label": "河间"
						}, {"value": "2714", "label": "孟村"}, {"value": "2674", "label": "南皮"}, {
							"value": "2623",
							"label": "青县"
						}, {"value": "2737", "label": "任丘"}, {"value": "2665", "label": "肃宁"}, {
							"value": "2684",
							"label": "吴桥"
						}, {"value": "2587", "label": "新华"}, {"value": "2695", "label": "献县"}, {
							"value": "2594",
							"label": "运河"
						}, {"value": "2652", "label": "盐山"}]
					}, {
						"value": "1267",
						"label": "邯郸",
						"children": [{"value": "1282", "label": "丛台"}, {"value": "1339", "label": "成安"}, {
							"value": "1389",
							"label": "磁县"
						}, {"value": "1349", "label": "大名"}, {"value": "1294", "label": "复兴"}, {
							"value": "1303",
							"label": "峰峰矿"
						}, {"value": "1409", "label": "肥乡"}, {"value": "1455", "label": "广平"}, {
							"value": "1463",
							"label": "馆陶"
						}, {"value": "1268", "label": "邯山"}, {"value": "1313", "label": "邯郸"}, {
							"value": "1447",
							"label": "鸡泽"
						}, {"value": "1324", "label": "临漳"}, {"value": "1439", "label": "邱县"}, {
							"value": "1494",
							"label": "曲周"
						}, {"value": "1370", "label": "涉县"}, {"value": "1472", "label": "魏县"}, {
							"value": "1505",
							"label": "武安"
						}, {"value": "1419", "label": "永年"}]
					}, {
						"value": "2902",
						"label": "衡水",
						"children": [{"value": "2951", "label": "安平"}, {"value": "2991", "label": "阜城"}, {
							"value": "2960",
							"label": "故城"
						}, {"value": "2974", "label": "景县"}, {"value": "3002", "label": "冀州"}, {
							"value": "2943",
							"label": "饶阳"
						}, {"value": "3014", "label": "深州"}, {"value": "2903", "label": "桃城"}, {
							"value": "2926",
							"label": "武邑"
						}, {"value": "2936", "label": "武强"}, {"value": "2914", "label": "枣强"}]
					}, {
						"value": "2792",
						"label": "廊坊",
						"children": [{"value": "2793", "label": "安次"}, {"value": "2878", "label": "霸州"}, {
							"value": "2847",
							"label": "大城"
						}, {"value": "2872", "label": "大厂"}, {"value": "2805", "label": "广阳"}, {
							"value": "2815",
							"label": "固安"
						}, {"value": "2891", "label": "三河"}, {"value": "2858", "label": "文安"}, {
							"value": "2837",
							"label": "香河"
						}, {"value": "2825", "label": "永清"}]
					}, {
						"value": "1162",
						"label": "秦皇岛",
						"children": [{"value": "1192", "label": "北戴河"}, {"value": "1223", "label": "昌黎"}, {
							"value": "1240",
							"label": "抚宁"
						}, {"value": "1163", "label": "海港"}, {"value": "1254", "label": "卢龙"}, {
							"value": "1197",
							"label": "青龙"
						}, {"value": "1182", "label": "山海关"}]
					}, {
						"value": "631",
						"label": "石家庄",
						"children": [{"value": "632", "label": "长安"}, {"value": "774", "label": "高邑"}, {
							"value": "880",
							"label": "藁城"
						}, {"value": "684", "label": "井陉矿"}, {"value": "704", "label": "井陉"}, {
							"value": "895",
							"label": "晋州"
						}, {"value": "733", "label": "栾城"}, {"value": "758", "label": "灵寿"}, {
							"value": "919",
							"label": "鹿泉"
						}, {"value": "811", "label": "平山"}, {"value": "644", "label": "桥东"}, {
							"value": "655",
							"label": "桥西"
						}, {"value": "780", "label": "深泽"}, {"value": "799", "label": "无极"}, {
							"value": "668",
							"label": "新华"
						}, {"value": "742", "label": "行唐"}, {"value": "864", "label": "辛集"}, {
							"value": "906",
							"label": "新乐"
						}, {"value": "690", "label": "裕华"}, {"value": "835", "label": "元氏"}, {
							"value": "722",
							"label": "正定"
						}, {"value": "787", "label": "赞皇"}, {"value": "852", "label": "赵县"}]
					}, {
						"value": "932",
						"label": "唐山",
						"children": [{"value": "1021", "label": "曹妃甸"}, {"value": "980", "label": "丰南"}, {
							"value": "995",
							"label": "丰润"
						}, {"value": "957", "label": "古冶"}, {"value": "968", "label": "开平"}, {
							"value": "933",
							"label": "路南"
						}, {"value": "944", "label": "路北"}, {"value": "1025", "label": "滦县"}, {
							"value": "1040",
							"label": "滦南"
						}, {"value": "1057", "label": "乐亭"}, {"value": "1074", "label": "迁西"}, {
							"value": "1142",
							"label": "迁安"
						}, {"value": "1093", "label": "玉田"}, {"value": "1114", "label": "遵化"}]
					}, {
						"value": "1528",
						"label": "邢台",
						"children": [{"value": "1586", "label": "柏乡"}, {"value": "1659", "label": "广宗"}, {
							"value": "1641",
							"label": "巨鹿"
						}, {"value": "1568", "label": "临城"}, {"value": "1593", "label": "隆尧"}, {
							"value": "1699",
							"label": "临西"
						}, {"value": "1577", "label": "内丘"}, {"value": "1615", "label": "南和"}, {
							"value": "1624",
							"label": "宁晋"
						}, {"value": "1709", "label": "南宫"}, {"value": "1668", "label": "平乡"}, {
							"value": "1529",
							"label": "桥东"
						}, {"value": "1536", "label": "桥西"}, {"value": "1692", "label": "清河"}, {
							"value": "1606",
							"label": "任县"
						}, {"value": "1725", "label": "沙河"}, {"value": "1676", "label": "威县"}, {
							"value": "1547",
							"label": "邢台"
						}, {"value": "1652", "label": "新河"}]
					}, {
						"value": "2107",
						"label": "张家口",
						"children": [{"value": "2329", "label": "赤城"}, {"value": "2348", "label": "崇礼"}, {
							"value": "2197",
							"label": "沽源"
						}, {"value": "2269", "label": "怀安"}, {"value": "2293", "label": "怀来"}, {
							"value": "2182",
							"label": "康保"
						}, {"value": "2108", "label": "桥东"}, {"value": "2117", "label": "桥西"}, {
							"value": "2216",
							"label": "尚义"
						}, {"value": "2231", "label": "蔚县"}, {"value": "2281", "label": "万全"}, {
							"value": "2127",
							"label": "宣化"
						}, {"value": "2138", "label": "下花园"}, {"value": "2145", "label": "宣化"}, {
							"value": "2254",
							"label": "阳原"
						}, {"value": "2160", "label": "张北"}, {"value": "2311", "label": "涿鹿"}]
					}]
				}, {
					"value": "9",
					"label": "黑龙江",
					"children": [{
						"value": "8963",
						"label": "大庆",
						"children": [{"value": "8996", "label": "大同"}, {"value": "9050", "label": "杜尔伯特"}, {
							"value": "8989",
							"label": "红岗"
						}, {"value": "8974", "label": "龙凤"}, {"value": "9041", "label": "林甸"}, {
							"value": "8981",
							"label": "让胡路"
						}, {"value": "8964", "label": "萨尔图"}, {"value": "9011", "label": "肇州"}, {"value": "9024", "label": "肇源"}]
					}, {
						"value": "9631",
						"label": "大兴安岭",
						"children": [{"value": "9632", "label": "呼玛"}, {"value": "9648", "label": "漠河"}, {
							"value": "9641",
							"label": "塔河"
						}]
					}, {
						"value": "8242",
						"label": "哈尔滨",
						"children": [{"value": "8383", "label": "阿城"}, {"value": "8422", "label": "宾县"}, {
							"value": "8440",
							"label": "巴彦"
						}, {"value": "8243", "label": "道里"}, {"value": "8290", "label": "道外"}, {
							"value": "8413",
							"label": "方正"
						}, {"value": "8362", "label": "呼兰"}, {"value": "8459", "label": "木兰"}, {
							"value": "8268",
							"label": "南岗"
						}, {"value": "8318", "label": "平房"}, {"value": "8328", "label": "松北"}, {
							"value": "8488",
							"label": "双城"
						}, {"value": "8514", "label": "尚志"}, {"value": "8468", "label": "通河"}, {
							"value": "8532",
							"label": "五常"
						}, {"value": "8336", "label": "香坊"}, {"value": "8403", "label": "依兰"}, {"value": "8477", "label": "延寿"}]
					}, {
						"value": "8827",
						"label": "鹤岗",
						"children": [{"value": "8856", "label": "东山"}, {"value": "8834", "label": "工农"}, {
							"value": "8870",
							"label": "萝北"
						}, {"value": "8841", "label": "南山"}, {"value": "8879", "label": "绥滨"}, {
							"value": "8828",
							"label": "向阳"
						}, {"value": "8848", "label": "兴安"}, {"value": "8865", "label": "兴山"}]
					}, {
						"value": "9362",
						"label": "黑河",
						"children": [{"value": "9363", "label": "爱辉"}, {"value": "9418", "label": "北安"}, {
							"value": "9379",
							"label": "嫩江"
						}, {"value": "9405", "label": "孙吴"}, {"value": "9434", "label": "五大连池"}, {"value": "9394", "label": "逊克"}]
					}, {
						"value": "8739",
						"label": "鸡西",
						"children": [{"value": "8774", "label": "城子河"}, {"value": "8760", "label": "滴道"}, {
							"value": "8750",
							"label": "恒山"
						}, {"value": "8797", "label": "虎林"}, {"value": "8740", "label": "鸡冠"}, {
							"value": "8785",
							"label": "鸡东"
						}, {"value": "8767", "label": "梨树"}, {"value": "8782", "label": "麻山"}, {"value": "8809", "label": "密山"}]
					}, {
						"value": "9129",
						"label": "佳木斯",
						"children": [{"value": "9140", "label": "东风"}, {"value": "9196", "label": "抚远"}, {
							"value": "9217",
							"label": "富锦"
						}, {"value": "9164", "label": "桦南"}, {"value": "9175", "label": "桦川"}, {
							"value": "9149",
							"label": "郊区"
						}, {"value": "9138", "label": "前进"}, {"value": "9185", "label": "汤原"}, {
							"value": "9206",
							"label": "同江"
						}, {"value": "9130", "label": "向阳"}]
					}, {
						"value": "9275",
						"label": "牡丹江",
						"children": [{"value": "9290", "label": "爱民"}, {"value": "9276", "label": "东安"}, {
							"value": "9308",
							"label": "东宁"
						}, {"value": "9330", "label": "海林"}, {"value": "9315", "label": "林口"}, {
							"value": "9353",
							"label": "穆棱"
						}, {"value": "9339", "label": "宁安"}, {"value": "9327", "label": "绥芬河"}, {
							"value": "9299",
							"label": "西安"
						}, {"value": "9282", "label": "阳明"}]
					}, {
						"value": "8557",
						"label": "齐齐哈尔",
						"children": [{"value": "8582", "label": "昂昂溪"}, {"value": "8703", "label": "拜泉"}, {
							"value": "8589",
							"label": "富拉尔基"
						}, {"value": "8666", "label": "富裕"}, {"value": "8655", "label": "甘南"}, {
							"value": "8566",
							"label": "建华"
						}, {"value": "8677", "label": "克山"}, {"value": "8693", "label": "克东"}, {
							"value": "8558",
							"label": "龙沙"
						}, {"value": "8614", "label": "龙江"}, {"value": "8606", "label": "梅里斯"}, {
							"value": "8600",
							"label": "碾子山"
						}, {"value": "8720", "label": "讷河"}, {"value": "8573", "label": "铁锋"}, {
							"value": "8644",
							"label": "泰来"
						}, {"value": "8629", "label": "依安"}]
					}, {
						"value": "9230",
						"label": "七台河",
						"children": [{"value": "9259", "label": "勃利"}, {"value": "9250", "label": "茄子河"}, {
							"value": "9244",
							"label": "桃山"
						}, {"value": "9231", "label": "新兴"}]
					}, {
						"value": "8889",
						"label": "双鸭山",
						"children": [{"value": "8911", "label": "宝山"}, {"value": "8942", "label": "宝清"}, {
							"value": "8890",
							"label": "尖山"
						}, {"value": "8920", "label": "集贤"}, {"value": "8898", "label": "岭东"}, {
							"value": "8953",
							"label": "饶河"
						}, {"value": "8905", "label": "四方台"}, {"value": "8930", "label": "友谊"}]
					}, {
						"value": "9447",
						"label": "绥化",
						"children": [{"value": "9564", "label": "安达"}, {"value": "9448", "label": "北林"}, {
							"value": "9607",
							"label": "海伦"
						}, {"value": "9492", "label": "兰西"}, {"value": "9539", "label": "明水"}, {
							"value": "9508",
							"label": "青冈"
						}, {"value": "9524", "label": "庆安"}, {"value": "9552", "label": "绥棱"}, {
							"value": "9476",
							"label": "望奎"
						}, {"value": "9582", "label": "肇东"}]
					}, {
						"value": "9062",
						"label": "伊春",
						"children": [{"value": "9084", "label": "翠峦"}, {"value": "9103", "label": "带岭"}, {
							"value": "9107",
							"label": "红星"
						}, {"value": "9092", "label": "金山屯"}, {"value": "9111", "label": "嘉荫"}, {
							"value": "9090",
							"label": "美溪"
						}, {"value": "9069", "label": "南岔"}, {"value": "9109", "label": "上甘岭"}, {
							"value": "9100",
							"label": "汤旺河"
						}, {"value": "9121", "label": "铁力"}, {"value": "9095", "label": "五营"}, {
							"value": "9098",
							"label": "乌马河"
						}, {"value": "9105", "label": "乌伊岭"}, {"value": "9080", "label": "西林"}, {
							"value": "9087",
							"label": "新青"
						}, {"value": "9063", "label": "伊春"}, {"value": "9076", "label": "友好"}]
					}]
				}, {
					"value": "17",
					"label": "河南",
					"children": [{
						"value": "19778",
						"label": "安阳",
						"children": [{"value": "19825", "label": "安阳"}, {"value": "19794", "label": "北关"}, {
							"value": "19858",
							"label": "滑县"
						}, {"value": "19815", "label": "龙安"}, {"value": "19900", "label": "林州"}, {
							"value": "19882",
							"label": "内黄"
						}, {"value": "19847", "label": "汤阴"}, {"value": "19779", "label": "文峰"}, {"value": "19804", "label": "殷都"}]
					}, {
						"value": "19921",
						"label": "鹤壁",
						"children": [{"value": "19922", "label": "鹤山"}, {"value": "19951", "label": "浚县"}, {
							"value": "19939",
							"label": "淇滨"
						}, {"value": "19962", "label": "淇县"}, {"value": "19930", "label": "山城"}]
					}, {
						"value": "20135",
						"label": "焦作",
						"children": [{"value": "20190", "label": "博爱"}, {"value": "20136", "label": "解放"}, {
							"value": "20157",
							"label": "马村"
						}, {"value": "20232", "label": "孟州"}, {"value": "20218", "label": "沁阳"}, {
							"value": "20165",
							"label": "山阳"
						}, {"value": "20191", "label": "武陟"}, {"value": "20207", "label": "温县"}, {
							"value": "20181",
							"label": "修武"
						}, {"value": "20146", "label": "中站"}]
					}, {
						"value": "19312",
						"label": "开封",
						"children": [{"value": "19328", "label": "鼓楼"}, {"value": "19345", "label": "金明"}, {
							"value": "19403",
							"label": "开封"
						}, {"value": "19313", "label": "龙亭"}, {"value": "19419", "label": "兰考"}, {
							"value": "19351",
							"label": "杞县"
						}, {"value": "19320", "label": "顺河"}, {"value": "19372", "label": "通许"}, {
							"value": "19385",
							"label": "尉氏"
						}, {"value": "19337", "label": "禹王台"}]
					}, {
						"value": "19435",
						"label": "洛阳",
						"children": [{"value": "19456", "label": "涧西"}, {"value": "19471", "label": "吉利"}, {
							"value": "19436",
							"label": "老城"
						}, {"value": "19474", "label": "洛龙"}, {"value": "19515", "label": "栾川"}, {
							"value": "19578",
							"label": "洛宁"
						}, {"value": "19492", "label": "孟津"}, {"value": "19547", "label": "汝阳"}, {
							"value": "19530",
							"label": "嵩县"
						}, {"value": "19446", "label": "西工"}, {"value": "19503", "label": "新安"}, {
							"value": "19561",
							"label": "宜阳"
						}, {"value": "19597", "label": "伊川"}, {"value": "19612", "label": "偃师"}]
					}, {
						"value": "20426",
						"label": "漯河",
						"children": [{"value": "20471", "label": "临颍"}, {"value": "20456", "label": "舞阳"}, {
							"value": "20427",
							"label": "源汇"
						}, {"value": "20436", "label": "郾城"}, {"value": "20446", "label": "召陵"}]
					}, {
						"value": "20572",
						"label": "南阳",
						"children": [{"value": "20798", "label": "邓州"}, {"value": "20629", "label": "方城"}, {
							"value": "20612",
							"label": "南召"
						}, {"value": "20690", "label": "内乡"}, {"value": "20725", "label": "社旗"}, {
							"value": "20742",
							"label": "唐河"
						}, {"value": "20781", "label": "桐柏"}, {"value": "20573", "label": "宛城"}, {
							"value": "20591",
							"label": "卧龙"
						}, {"value": "20647", "label": "西峡"}, {"value": "20707", "label": "淅川"}, {
							"value": "20765",
							"label": "新野"
						}, {"value": "20667", "label": "镇平"}]
					}, {
						"value": "19626",
						"label": "平顶山",
						"children": [{"value": "19669", "label": "宝丰"}, {"value": "19727", "label": "郏县"}, {
							"value": "19702",
							"label": "鲁山"
						}, {"value": "19757", "label": "汝州"}, {"value": "19655", "label": "石龙"}, {
							"value": "19642",
							"label": "卫东"
						}, {"value": "19743", "label": "舞钢"}, {"value": "19627", "label": "新华"}, {
							"value": "19683",
							"label": "叶县"
						}, {"value": "19660", "label": "湛河"}]
					}, {
						"value": "20244",
						"label": "濮阳",
						"children": [{"value": "20295", "label": "范县"}, {"value": "20245", "label": "华龙"}, {
							"value": "20282",
							"label": "南乐"
						}, {"value": "20318", "label": "濮阳"}, {"value": "20264", "label": "清丰"}, {"value": "20308", "label": "台前"}]
					}, {
						"value": "20487",
						"label": "三门峡",
						"children": [{"value": "20488", "label": "湖滨"}, {"value": "20526", "label": "卢氏"}, {
							"value": "20554",
							"label": "灵宝"
						}, {"value": "20499", "label": "渑池"}, {"value": "20512", "label": "陕县"}, {"value": "20546", "label": "义马"}]
					}, {
						"value": "20826",
						"label": "商丘",
						"children": [{"value": "20827", "label": "梁园"}, {"value": "20868", "label": "民权"}, {
							"value": "20907",
							"label": "宁陵"
						}, {"value": "20848", "label": "睢阳"}, {"value": "20886", "label": "睢县"}, {
							"value": "20972",
							"label": "夏邑"
						}, {"value": "20945", "label": "虞城"}, {"value": "20997", "label": "永城"}, {"value": "20923", "label": "柘城"}]
					}, {
						"value": "19972",
						"label": "新乡",
						"children": [{"value": "20078", "label": "长垣"}, {"value": "19990", "label": "凤泉"}, {
							"value": "20058",
							"label": "封丘"
						}, {"value": "19973", "label": "红旗"}, {"value": "20014", "label": "获嘉"}, {
							"value": "20112",
							"label": "辉县"
						}, {"value": "19996", "label": "牧野"}, {"value": "19981", "label": "卫滨"}, {
							"value": "20097",
							"label": "卫辉"
						}, {"value": "20006", "label": "新乡"}, {"value": "20026", "label": "原阳"}, {"value": "20045", "label": "延津"}]
					}, {
						"value": "20321",
						"label": "许昌",
						"children": [{"value": "20409", "label": "长葛"}, {"value": "20322", "label": "魏都"}, {
							"value": "20336",
							"label": "许昌"
						}, {"value": "20366", "label": "襄城"}, {"value": "20353", "label": "鄢陵"}, {"value": "20383", "label": "禹州"}]
					}, {
						"value": "21025",
						"label": "信阳",
						"children": [{"value": "21091", "label": "光山"}, {"value": "21147", "label": "固始"}, {
							"value": "21180",
							"label": "潢川"
						}, {"value": "21202", "label": "淮滨"}, {"value": "21071", "label": "罗山"}, {
							"value": "21044",
							"label": "平桥"
						}, {"value": "21026", "label": "浉河"}, {"value": "21127", "label": "商城"}, {
							"value": "21111",
							"label": "新县"
						}, {"value": "21220", "label": "息县"}]
					}, {
						"value": "19109",
						"label": "郑州",
						"children": [{"value": "19295", "label": "登封"}, {"value": "19128", "label": "二七"}, {
							"value": "19144",
							"label": "管城"
						}, {"value": "19223", "label": "巩义"}, {"value": "19189", "label": "惠济"}, {
							"value": "19159",
							"label": "金水"
						}, {"value": "19184", "label": "上街"}, {"value": "19259", "label": "新密"}, {
							"value": "19276",
							"label": "新郑"
						}, {"value": "19244", "label": "荥阳"}, {"value": "19110", "label": "中原"}, {"value": "19198", "label": "中牟"}]
					}, {
						"value": "21243",
						"label": "周口",
						"children": [{"value": "21244", "label": "川汇"}, {"value": "21345", "label": "郸城"}, {
							"value": "21259",
							"label": "扶沟"
						}, {"value": "21366", "label": "淮阳"}, {"value": "21409", "label": "鹿邑"}, {
							"value": "21298",
							"label": "商水"
						}, {"value": "21322", "label": "沈丘"}, {"value": "21385", "label": "太康"}, {
							"value": "21276",
							"label": "西华"
						}, {"value": "21434", "label": "项城"}]
					}, {
						"value": "21456",
						"label": "驻马店",
						"children": [{"value": "21584", "label": "泌阳"}, {"value": "21531", "label": "平舆"}, {
							"value": "21571",
							"label": "确山"
						}, {"value": "21607", "label": "汝南"}, {"value": "21504", "label": "上蔡"}, {
							"value": "21625",
							"label": "遂平"
						}, {"value": "21483", "label": "西平"}, {"value": "21640", "label": "新蔡"}, {
							"value": "21457",
							"label": "驿城"
						}, {"value": "21551", "label": "正阳"}]
					}]
				}, {
					"value": "18",
					"label": "湖北",
					"children": [{
						"value": "22261",
						"label": "鄂州",
						"children": [{"value": "22275", "label": "鄂城"}, {"value": "22268", "label": "华容"}, {
							"value": "22262",
							"label": "梁子湖"
						}]
					}, {
						"value": "22871",
						"label": "恩施",
						"children": [{"value": "22916", "label": "巴东"}, {"value": "22872", "label": "恩施"}, {
							"value": "22959",
							"label": "鹤峰"
						}, {"value": "22905", "label": "建始"}, {"value": "22890", "label": "利川"}, {
							"value": "22950",
							"label": "来凤"
						}, {"value": "22928", "label": "宣恩"}, {"value": "22938", "label": "咸丰"}]
					}, {
						"value": "21859",
						"label": "黄石",
						"children": [{"value": "21883", "label": "大冶"}, {"value": "21860", "label": "黄石港"}, {
							"value": "21865",
							"label": "铁山"
						}, {"value": "21862", "label": "西塞山"}, {"value": "21863", "label": "下陆"}, {"value": "21866", "label": "阳新"}]
					}, {
						"value": "22601",
						"label": "黄冈",
						"children": [{"value": "22602", "label": "黄州"}, {"value": "22622", "label": "红安"}, {
							"value": "22687",
							"label": "黄梅"
						}, {"value": "22634", "label": "罗田"}, {"value": "22711", "label": "麻城"}, {
							"value": "22672",
							"label": "蕲春"
						}, {"value": "22611", "label": "团风"}, {"value": "22731", "label": "武穴"}, {
							"value": "22659",
							"label": "浠水"
						}, {"value": "22647", "label": "英山"}]
					}, {
						"value": "22289",
						"label": "荆门",
						"children": [{"value": "22290", "label": "东宝"}, {"value": "22300", "label": "掇刀"}, {
							"value": "22307",
							"label": "京山"
						}, {"value": "22329", "label": "沙洋"}, {"value": "22343", "label": "钟祥"}]
					}, {
						"value": "22479",
						"label": "荆州",
						"children": [{"value": "22503", "label": "公安"}, {"value": "22566", "label": "洪湖"}, {
							"value": "22492",
							"label": "荆州"
						}, {"value": "22519", "label": "监利"}, {"value": "22541", "label": "江陵"}, {
							"value": "22480",
							"label": "沙市"
						}, {"value": "22551", "label": "石首"}, {"value": "22584", "label": "松滋"}]
					}, {
						"value": "21900",
						"label": "十堰",
						"children": [{"value": "22010", "label": "丹江口"}, {"value": "21989", "label": "房县"}, {
							"value": "21901",
							"label": "茅箭"
						}, {"value": "21917", "label": "郧县"}, {"value": "21936", "label": "郧西"}, {
							"value": "21908",
							"label": "张湾"
						}, {"value": "21955", "label": "竹山"}, {"value": "21973", "label": "竹溪"}]
					}, {
						"value": "22821",
						"label": "随州",
						"children": [{"value": "22853", "label": "广水"}, {"value": "22833", "label": "随县"}, {
							"value": "22822",
							"label": "曾都"
						}]
					}, {
						"value": "21680",
						"label": "武汉",
						"children": [{"value": "21798", "label": "蔡甸"}, {"value": "21781", "label": "东西湖"}, {
							"value": "21725",
							"label": "汉阳"
						}, {"value": "21764", "label": "洪山"}, {"value": "21793", "label": "汉南"}, {
							"value": "21828",
							"label": "黄陂"
						}, {"value": "21681", "label": "江岸"}, {"value": "21699", "label": "江汉"}, {
							"value": "21812",
							"label": "江夏"
						}, {"value": "21713", "label": "硚口"}, {"value": "21753", "label": "青山"}, {
							"value": "21738",
							"label": "武昌"
						}, {"value": "21845", "label": "新洲"}]
					}, {
						"value": "22153",
						"label": "襄阳",
						"children": [{"value": "22212", "label": "保康"}, {"value": "22164", "label": "樊城"}, {
							"value": "22201",
							"label": "谷城"
						}, {"value": "22224", "label": "老河口"}, {"value": "22190", "label": "南漳"}, {
							"value": "22154",
							"label": "襄城"
						}, {"value": "22175", "label": "襄州"}, {"value": "22250", "label": "宜城"}, {"value": "22234", "label": "枣阳"}]
					}, {
						"value": "22364",
						"label": "孝感",
						"children": [{"value": "22442", "label": "安陆"}, {"value": "22395", "label": "大悟"}, {
							"value": "22458",
							"label": "汉川"
						}, {"value": "22365", "label": "孝南"}, {"value": "22382", "label": "孝昌"}, {
							"value": "22413",
							"label": "云梦"
						}, {"value": "22426", "label": "应城"}]
					}, {
						"value": "22744",
						"label": "咸宁",
						"children": [{"value": "22780", "label": "崇阳"}, {"value": "22806", "label": "赤壁"}, {
							"value": "22759",
							"label": "嘉鱼"
						}, {"value": "22768", "label": "通城"}, {"value": "22793", "label": "通山"}, {"value": "22745", "label": "咸安"}]
					}, {
						"value": "22028",
						"label": "宜昌",
						"children": [{"value": "22100", "label": "长阳"}, {"value": "22046", "label": "点军"}, {
							"value": "22132",
							"label": "当阳"
						}, {"value": "22040", "label": "伍家岗"}, {"value": "22112", "label": "五峰"}, {
							"value": "22029",
							"label": "西陵"
						}, {"value": "22078", "label": "兴山"}, {"value": "22056", "label": "夷陵"}, {
							"value": "22070",
							"label": "远安"
						}, {"value": "22121", "label": "宜都"}, {"value": "22052", "label": "秭亭"}, {
							"value": "22087",
							"label": "秭归"
						}, {"value": "22143", "label": "枝江"}]
					}]
				}, {
					"value": "19",
					"label": "湖南",
					"children": [{
						"value": "23040",
						"label": "长沙",
						"children": [{"value": "23141", "label": "长沙"}, {"value": "23041", "label": "芙蓉"}, {
							"value": "23088",
							"label": "开福"
						}, {"value": "23199", "label": "浏阳"}, {"value": "23165", "label": "宁乡"}, {
							"value": "23055",
							"label": "天心"
						}, {"value": "23119", "label": "望城"}, {"value": "23068", "label": "岳麓"}, {"value": "23106", "label": "雨花"}]
					}, {
						"value": "24116",
						"label": "常德",
						"children": [{"value": "24165", "label": "安乡"}, {"value": "24132", "label": "鼎城"}, {
							"value": "24184",
							"label": "汉寿"
						}, {"value": "24326", "label": "津市"}, {"value": "24215", "label": "澧县"}, {
							"value": "24247",
							"label": "临澧"
						}, {"value": "24306", "label": "石门"}, {"value": "24265", "label": "桃源"}, {"value": "24117", "label": "武陵"}]
					}, {
						"value": "24547",
						"label": "郴州",
						"children": [{"value": "24723", "label": "安仁"}, {"value": "24548", "label": "北湖"}, {
							"value": "24582",
							"label": "桂阳"
						}, {"value": "24707", "label": "桂东"}, {"value": "24654", "label": "嘉禾"}, {
							"value": "24668",
							"label": "临武"
						}, {"value": "24687", "label": "汝城"}, {"value": "24565", "label": "苏仙"}, {
							"value": "24609",
							"label": "宜章"
						}, {"value": "24632", "label": "永兴"}, {"value": "24741", "label": "资兴"}]
					}, {
						"value": "23466",
						"label": "衡阳",
						"children": [{"value": "23668", "label": "常宁"}, {"value": "23510", "label": "衡阳"}, {
							"value": "23537",
							"label": "衡南"
						}, {"value": "23564", "label": "衡山"}, {"value": "23582", "label": "衡东"}, {
							"value": "23631",
							"label": "耒阳"
						}, {"value": "23504", "label": "南岳"}, {"value": "23607", "label": "祁东"}, {
							"value": "23487",
							"label": "石鼓"
						}, {"value": "23479", "label": "雁峰"}, {"value": "23467", "label": "珠晖"}, {"value": "23496", "label": "蒸湘"}]
					}, {
						"value": "24983",
						"label": "怀化",
						"children": [{"value": "25046", "label": "辰溪"}, {"value": "24984", "label": "鹤城"}, {
							"value": "25120",
							"label": "会同"
						}, {"value": "25259", "label": "洪江"}, {"value": "25223", "label": "靖州"}, {
							"value": "25146",
							"label": "麻阳"
						}, {"value": "25237", "label": "通道"}, {"value": "25077", "label": "溆浦"}, {
							"value": "25170",
							"label": "新晃"
						}, {"value": "25022", "label": "沅陵"}, {"value": "24999", "label": "中方"}, {"value": "25194", "label": "芷江"}]
					}, {
						"value": "25292",
						"label": "娄底",
						"children": [{"value": "25293", "label": "娄星"}, {"value": "25353", "label": "冷水江"}, {
							"value": "25370",
							"label": "涟源"
						}, {"value": "25308", "label": "双峰"}, {"value": "25325", "label": "新化"}]
					}, {
						"value": "23696",
						"label": "邵阳",
						"children": [{"value": "23724", "label": "北塔"}, {"value": "23892", "label": "城步"}, {
							"value": "23710",
							"label": "大祥"
						}, {"value": "23825", "label": "洞口"}, {"value": "23798", "label": "隆回"}, {
							"value": "23697",
							"label": "双清"
						}, {"value": "23730", "label": "邵东"}, {"value": "23775", "label": "邵阳"}, {
							"value": "23848",
							"label": "绥宁"
						}, {"value": "23905", "label": "武冈"}, {"value": "23759", "label": "新邵"}, {"value": "23874", "label": "新宁"}]
					}, {
						"value": "23378",
						"label": "湘潭",
						"children": [{"value": "23458", "label": "韶山"}, {"value": "23416", "label": "湘潭"}, {
							"value": "23436",
							"label": "湘乡"
						}, {"value": "23379", "label": "雨湖"}, {"value": "23398", "label": "岳塘"}]
					}, {
						"value": "25391",
						"label": "湘西",
						"children": [{"value": "25469", "label": "保靖"}, {"value": "25425", "label": "凤凰"}, {
							"value": "25487",
							"label": "古丈"
						}, {"value": "25450", "label": "花垣"}, {"value": "25392", "label": "吉首"}, {
							"value": "25409",
							"label": "泸溪"
						}, {"value": "25531", "label": "龙山"}, {"value": "25500", "label": "永顺"}]
					}, {
						"value": "23927",
						"label": "岳阳",
						"children": [{"value": "23989", "label": "华容"}, {"value": "23959", "label": "君山"}, {
							"value": "24095",
							"label": "临湘"
						}, {"value": "24058", "label": "汨罗"}, {"value": "24030", "label": "平江"}, {
							"value": "24010",
							"label": "湘阴"
						}, {"value": "23928", "label": "岳阳楼"}, {"value": "23951", "label": "云溪"}, {"value": "23967", "label": "岳阳"}]
					}, {
						"value": "24445",
						"label": "益阳",
						"children": [{"value": "24508", "label": "安化"}, {"value": "24455", "label": "赫山"}, {
							"value": "24474",
							"label": "南县"
						}, {"value": "24493", "label": "桃江"}, {"value": "24532", "label": "沅江"}, {"value": "24446", "label": "资阳"}]
					}, {
						"value": "24762",
						"label": "永州",
						"children": [{"value": "24835", "label": "东安"}, {"value": "24868", "label": "道县"}, {
							"value": "24893",
							"label": "江永"
						}, {"value": "24960", "label": "江华"}, {"value": "24763", "label": "零陵"}, {
							"value": "24780",
							"label": "冷水滩"
						}, {"value": "24924", "label": "蓝山"}, {"value": "24906", "label": "宁远"}, {
							"value": "24801",
							"label": "祁阳"
						}, {"value": "24853", "label": "双牌"}, {"value": "24940", "label": "新田"}]
					}, {
						"value": "23237",
						"label": "株洲",
						"children": [{"value": "23310", "label": "茶陵"}, {"value": "23238", "label": "荷塘"}, {
							"value": "23246",
							"label": "芦淞"
						}, {"value": "23347", "label": "醴陵"}, {"value": "23257", "label": "石峰"}, {
							"value": "23266",
							"label": "天元"
						}, {"value": "23289", "label": "攸县"}, {"value": "23331", "label": "炎陵"}, {"value": "23274", "label": "株洲"}]
					}, {
						"value": "24338",
						"label": "张家界",
						"children": [{"value": "24374", "label": "慈利"}, {"value": "24406", "label": "桑植"}, {
							"value": "24368",
							"label": "武陵源"
						}, {"value": "24339", "label": "永定"}]
					}]
				}, {
					"value": "22",
					"label": "海南",
					"children": [{
						"value": "28597",
						"label": "海口",
						"children": [{"value": "28607", "label": "龙华"}, {"value": "28631", "label": "美兰"}, {
							"value": "28619",
							"label": "琼山"
						}, {"value": "28598", "label": "秀英"}]
					}, {"value": "28645", "label": "三亚"}, {
						"value": "28654",
						"label": "三沙",
						"children": [{"value": "28657", "label": "南沙群岛"}, {"value": "28655", "label": "西沙群岛"}]
					}]
				}, {
					"value": "8",
					"label": "吉林",
					"children": [{
						"value": "7868",
						"label": "白山",
						"children": [{"value": "7917", "label": "长白"}, {"value": "7893", "label": "抚松"}, {
							"value": "7869",
							"label": "浑江"
						}, {"value": "7882", "label": "江源"}, {"value": "7908", "label": "靖宇"}, {"value": "7926", "label": "临江"}]
					}, {
						"value": "8041",
						"label": "白城",
						"children": [{"value": "8120", "label": "大安"}, {"value": "8042", "label": "洮北"}, {
							"value": "8078",
							"label": "通榆"
						}, {"value": "8095", "label": "洮南"}, {"value": "8066", "label": "镇赉"}]
					}, {
						"value": "7299",
						"label": "长春",
						"children": [{"value": "7337", "label": "朝阳"}, {"value": "7451", "label": "德惠"}, {
							"value": "7350",
							"label": "二道"
						}, {"value": "7406", "label": "九台"}, {"value": "7320", "label": "宽城"}, {
							"value": "7365",
							"label": "绿园"
						}, {"value": "7300", "label": "南关"}, {"value": "7384", "label": "农安"}, {
							"value": "7376",
							"label": "双阳"
						}, {"value": "7422", "label": "榆树"}]
					}, {
						"value": "7470",
						"label": "吉林",
						"children": [{"value": "7471", "label": "昌邑"}, {"value": "7510", "label": "船营"}, {
							"value": "7526",
							"label": "丰满"
						}, {"value": "7567", "label": "桦甸"}, {"value": "7549", "label": "蛟河"}, {
							"value": "7491",
							"label": "龙潭"
						}, {"value": "7603", "label": "磐石"}, {"value": "7582", "label": "舒兰"}, {"value": "7539", "label": "永吉"}]
					}, {
						"value": "7732",
						"label": "辽源",
						"children": [{"value": "7738", "label": "东丰"}, {"value": "7753", "label": "东辽"}, {
							"value": "7733",
							"label": "龙山"
						}, {"value": "7736", "label": "西安"}]
					}, {
						"value": "7621",
						"label": "四平",
						"children": [{"value": "7681", "label": "公主岭"}, {"value": "7642", "label": "梨树"}, {
							"value": "7712",
							"label": "双辽"
						}, {"value": "7622", "label": "铁西"}, {"value": "7629", "label": "铁东"}, {"value": "7665", "label": "伊通"}]
					}, {
						"value": "7940",
						"label": "松原",
						"children": [{"value": "7989", "label": "长岭"}, {"value": "8023", "label": "扶余"}, {
							"value": "7941",
							"label": "宁江"
						}, {"value": "7966", "label": "前郭尔罗斯"}, {"value": "8012", "label": "乾安"}]
					}, {
						"value": "7767",
						"label": "通化",
						"children": [{"value": "7768", "label": "东昌"}, {"value": "7779", "label": "二道江"}, {
							"value": "7803",
							"label": "辉南"
						}, {"value": "7853", "label": "集安"}, {"value": "7815", "label": "柳河"}, {
							"value": "7831",
							"label": "梅河口"
						}, {"value": "7786", "label": "通化"}]
					}, {
						"value": "8144",
						"label": "延边",
						"children": [{"value": "8231", "label": "安图"}, {"value": "8164", "label": "敦化"}, {
							"value": "8185",
							"label": "珲春"
						}, {"value": "8209", "label": "和龙"}, {"value": "8199", "label": "龙井"}, {
							"value": "8156",
							"label": "图们"
						}, {"value": "8221", "label": "汪清"}, {"value": "8145", "label": "延吉"}]
					}]
				}, {
					"value": "11",
					"label": "江苏",
					"children": [{
						"value": "10253",
						"label": "常州",
						"children": [{"value": "10309", "label": "金坛"}, {"value": "10298", "label": "溧阳"}, {
							"value": "10269",
							"label": "戚墅堰"
						}, {"value": "10254", "label": "天宁"}, {"value": "10283", "label": "武进"}, {
							"value": "10273",
							"label": "新北"
						}, {"value": "10261", "label": "钟楼"}]
					}, {
						"value": "10621",
						"label": "淮安",
						"children": [{"value": "10639", "label": "淮安"}, {"value": "10666", "label": "淮阴"}, {
							"value": "10728",
							"label": "洪泽"
						}, {"value": "10762", "label": "金湖"}, {"value": "10699", "label": "涟水"}, {
							"value": "10622",
							"label": "清河"
						}, {"value": "10688", "label": "清浦"}, {"value": "10741", "label": "盱眙"}]
					}, {
						"value": "10524",
						"label": "连云港",
						"children": [{"value": "10575", "label": "东海"}, {"value": "10559", "label": "赣榆"}, {
							"value": "10595",
							"label": "灌云"
						}, {"value": "10609", "label": "灌南"}, {"value": "10550", "label": "海州"}, {
							"value": "10525",
							"label": "连云"
						}, {"value": "10539", "label": "新浦"}]
					}, {
						"value": "9882",
						"label": "南京",
						"children": [{"value": "9912", "label": "鼓楼"}, {"value": "9988", "label": "高淳"}, {
							"value": "9905",
							"label": "建邺"
						}, {"value": "9955", "label": "江宁"}, {"value": "9966", "label": "六合"}, {
							"value": "9979",
							"label": "溧水"
						}, {"value": "9926", "label": "浦口"}, {"value": "9891", "label": "秦淮"}, {
							"value": "9937",
							"label": "栖霞"
						}, {"value": "9883", "label": "玄武"}, {"value": "9947", "label": "雨花台"}]
					}, {
						"value": "10421",
						"label": "南通",
						"children": [{"value": "10422", "label": "崇川"}, {"value": "10438", "label": "港闸"}, {
							"value": "10465",
							"label": "海安"
						}, {"value": "10516", "label": "海门"}, {"value": "10490", "label": "启东"}, {
							"value": "10476",
							"label": "如东"
						}, {"value": "10503", "label": "如皋"}, {"value": "10445", "label": "通州"}]
					}, {
						"value": "10317",
						"label": "苏州",
						"children": [{"value": "10381", "label": "常熟"}, {"value": "10350", "label": "姑苏"}, {
							"value": "10318",
							"label": "虎丘"
						}, {"value": "10402", "label": "昆山"}, {"value": "10413", "label": "太仓"}, {
							"value": "10326",
							"label": "吴中"
						}, {"value": "10372", "label": "吴江"}, {"value": "10341", "label": "相城"}, {"value": "10393", "label": "张家港"}]
					}, {
						"value": "11060",
						"label": "泰州",
						"children": [{"value": "11077", "label": "高港"}, {"value": "11061", "label": "海陵"}, {
							"value": "11087",
							"label": "姜堰"
						}, {"value": "11140", "label": "靖江"}, {"value": "11153", "label": "泰兴"}, {"value": "11105", "label": "兴化"}]
					}, {
						"value": "9997",
						"label": "无锡",
						"children": [{"value": "10012", "label": "北塘"}, {"value": "10033", "label": "滨湖"}, {
							"value": "9998",
							"label": "崇安"
						}, {"value": "10025", "label": "惠山"}, {"value": "10049", "label": "江阴"}, {
							"value": "10005",
							"label": "南长"
						}, {"value": "10017", "label": "锡山"}, {"value": "10064", "label": "宜兴"}]
					}, {
						"value": "10084",
						"label": "徐州",
						"children": [{"value": "10160", "label": "丰县"}, {"value": "10085", "label": "鼓楼"}, {
							"value": "10106",
							"label": "贾汪"
						}, {"value": "10176", "label": "沛县"}, {"value": "10227", "label": "邳州"}, {
							"value": "10116",
							"label": "泉山"
						}, {"value": "10192", "label": "睢宁"}, {"value": "10131", "label": "铜山"}, {
							"value": "10209",
							"label": "新沂"
						}, {"value": "10097", "label": "云龙"}]
					}, {
						"value": "11171",
						"label": "宿迁",
						"children": [{"value": "11211", "label": "沭阳"}, {"value": "11251", "label": "泗阳"}, {
							"value": "11268",
							"label": "泗洪"
						}, {"value": "11172", "label": "宿城"}, {"value": "11195", "label": "宿豫"}]
					}, {
						"value": "10774",
						"label": "盐城",
						"children": [{"value": "10823", "label": "滨海"}, {"value": "10879", "label": "东台"}, {
							"value": "10895",
							"label": "大丰"
						}, {"value": "10836", "label": "阜宁"}, {"value": "10866", "label": "建湖"}, {
							"value": "10852",
							"label": "射阳"
						}, {"value": "10775", "label": "亭湖"}, {"value": "10814", "label": "响水"}, {"value": "10793", "label": "盐都"}]
					}, {
						"value": "10908",
						"label": "扬州",
						"children": [{"value": "10959", "label": "宝应"}, {"value": "10909", "label": "广陵"}, {
							"value": "10985",
							"label": "高邮"
						}, {"value": "10922", "label": "邗江"}, {"value": "10945", "label": "江都"}, {"value": "10973", "label": "仪征"}]
					}, {
						"value": "10998",
						"label": "镇江",
						"children": [{"value": "11019", "label": "丹徒"}, {"value": "11028", "label": "丹阳"}, {
							"value": "10999",
							"label": "京口"
						}, {"value": "11048", "label": "句容"}, {"value": "11011", "label": "润州"}, {"value": "11042", "label": "扬中"}]
					}]
				}, {
					"value": "15",
					"label": "江西",
					"children": [{
						"value": "16773",
						"label": "抚州",
						"children": [{"value": "16850", "label": "崇仁"}, {"value": "16917", "label": "东乡"}, {
							"value": "16930",
							"label": "广昌"
						}, {"value": "16895", "label": "金溪"}, {"value": "16774", "label": "临川"}, {
							"value": "16822",
							"label": "黎川"
						}, {"value": "16866", "label": "乐安"}, {"value": "16809", "label": "南城"}, {
							"value": "16837",
							"label": "南丰"
						}, {"value": "16882", "label": "宜黄"}, {"value": "16909", "label": "资溪"}]
					}, {
						"value": "16034",
						"label": "赣州",
						"children": [{"value": "16129", "label": "安远"}, {"value": "16112", "label": "崇义"}, {
							"value": "16085",
							"label": "大余"
						}, {"value": "16162", "label": "定南"}, {"value": "16048", "label": "赣县"}, {
							"value": "16255",
							"label": "会昌"
						}, {"value": "16148", "label": "龙南"}, {"value": "16180", "label": "宁都"}, {
							"value": "16320",
							"label": "南康"
						}, {"value": "16170", "label": "全南"}, {"value": "16302", "label": "瑞金"}, {
							"value": "16097",
							"label": "上犹"
						}, {"value": "16291", "label": "石城"}, {"value": "16068", "label": "信丰"}, {
							"value": "16229",
							"label": "兴国"
						}, {"value": "16275", "label": "寻乌"}, {"value": "16205", "label": "于都"}, {"value": "16035", "label": "章贡"}]
					}, {
						"value": "15624",
						"label": "景德",
						"children": [{"value": "15625", "label": "昌江"}, {"value": "15643", "label": "浮梁"}, {
							"value": "15662",
							"label": "乐平"
						}, {"value": "15633", "label": "珠山"}]
					}, {
						"value": "15742",
						"label": "九江",
						"children": [{"value": "15850", "label": "德安"}, {"value": "15874", "label": "都昌"}, {
							"value": "15944",
							"label": "共青城"
						}, {"value": "15899", "label": "湖口"}, {"value": "15763", "label": "九江"}, {
							"value": "15743",
							"label": "庐山"
						}, {"value": "15912", "label": "彭泽"}, {"value": "15925", "label": "瑞昌"}, {
							"value": "15776",
							"label": "武宁"
						}, {"value": "15755", "label": "浔阳"}, {"value": "15797", "label": "修水"}, {
							"value": "15864",
							"label": "星子"
						}, {"value": "15834", "label": "永修"}]
					}, {
						"value": "16343",
						"label": "吉安",
						"children": [{"value": "16518", "label": "安福"}, {"value": "16344", "label": "吉州"}, {
							"value": "16366",
							"label": "吉安"
						}, {"value": "16386", "label": "吉水"}, {"value": "16561", "label": "井冈山"}, {
							"value": "16356",
							"label": "青原"
						}, {"value": "16477", "label": "遂川"}, {"value": "16454", "label": "泰和"}, {
							"value": "16501",
							"label": "万安"
						}, {"value": "16405", "label": "峡江"}, {"value": "16417", "label": "新干"}, {
							"value": "16432",
							"label": "永丰"
						}, {"value": "16538", "label": "永新"}]
					}, {
						"value": "15504",
						"label": "南昌",
						"children": [{"value": "15591", "label": "安义"}, {"value": "15505", "label": "东湖"}, {
							"value": "15602",
							"label": "进贤"
						}, {"value": "15553", "label": "南昌"}, {"value": "15528", "label": "青云谱"}, {
							"value": "15542",
							"label": "青山湖"
						}, {"value": "15535", "label": "湾里"}, {"value": "15516", "label": "西湖"}, {"value": "15572", "label": "新建"}]
					}, {
						"value": "15681",
						"label": "萍乡",
						"children": [{"value": "15682", "label": "安源"}, {"value": "15706", "label": "莲花"}, {
							"value": "15731",
							"label": "芦溪"
						}, {"value": "15720", "label": "上栗"}, {"value": "15694", "label": "湘东"}]
					}, {
						"value": "16942",
						"label": "上饶",
						"children": [{"value": "17152", "label": "德兴"}, {"value": "16978", "label": "广丰"}, {
							"value": "17039",
							"label": "横峰"
						}, {"value": "17090", "label": "鄱阳"}, {"value": "17021", "label": "铅山"}, {
							"value": "16953",
							"label": "上饶"
						}, {"value": "17121", "label": "万年"}, {"value": "17134", "label": "婺源"}, {
							"value": "16943",
							"label": "信州"
						}, {"value": "17002", "label": "玉山"}, {"value": "17051", "label": "弋阳"}, {"value": "17069", "label": "余干"}]
					}, {
						"value": "15950",
						"label": "新余",
						"children": [{"value": "15973", "label": "分宜"}, {"value": "15951", "label": "渝水"}]
					}, {
						"value": "15985",
						"label": "鹰潭",
						"children": [{"value": "16008", "label": "贵溪"}, {"value": "15986", "label": "月湖"}, {
							"value": "15995",
							"label": "余江"
						}]
					}, {
						"value": "16581",
						"label": "宜春",
						"children": [{"value": "16614", "label": "奉新"}, {"value": "16696", "label": "丰城"}, {
							"value": "16750",
							"label": "高安"
						}, {"value": "16675", "label": "靖安"}, {"value": "16647", "label": "上高"}, {
							"value": "16687",
							"label": "铜鼓"
						}, {"value": "16629", "label": "万载"}, {"value": "16582", "label": "袁州"}, {
							"value": "16662",
							"label": "宜丰"
						}, {"value": "16729", "label": "樟树"}]
					}]
				}, {
					"value": "7",
					"label": "辽宁",
					"children": [{
						"value": "6067",
						"label": "鞍山",
						"children": [{"value": "6162", "label": "海城"}, {"value": "6100", "label": "立山"}, {
							"value": "6114",
							"label": "千山"
						}, {"value": "6068", "label": "铁东"}, {"value": "6085", "label": "铁西"}, {
							"value": "6121",
							"label": "台安"
						}, {"value": "6135", "label": "岫岩"}]
					}, {
						"value": "6282",
						"label": "本溪",
						"children": [{"value": "6320", "label": "本溪"}, {"value": "6333", "label": "桓仁"}, {
							"value": "6304",
							"label": "明山"
						}, {"value": "6314", "label": "南芬"}, {"value": "6283", "label": "平山"}, {"value": "6293", "label": "溪湖"}]
					}, {
						"value": "6992",
						"label": "朝阳",
						"children": [{"value": "7101", "label": "北票"}, {"value": "7021", "label": "朝阳"}, {
							"value": "7049",
							"label": "建平"
						}, {"value": "7079", "label": "喀喇沁左翼"}, {"value": "7009", "label": "龙城"}, {
							"value": "7136",
							"label": "凌源"
						}, {"value": "6993", "label": "双塔"}]
					}, {
						"value": "5895",
						"label": "大连",
						"children": [{"value": "5977", "label": "长海"}, {"value": "5923", "label": "甘井子"}, {
							"value": "5953",
							"label": "金州"
						}, {"value": "5939", "label": "旅顺口"}, {"value": "6016", "label": "普兰店"}, {
							"value": "5913",
							"label": "沙河口"
						}, {"value": "5983", "label": "瓦房店"}, {"value": "5905", "label": "西岗"}, {
							"value": "5896",
							"label": "中山"
						}, {"value": "6040", "label": "庄河"}]
					}, {
						"value": "6347",
						"label": "丹东",
						"children": [{"value": "6403", "label": "东港"}, {"value": "6422", "label": "凤城"}, {
							"value": "6380",
							"label": "宽甸"
						}, {"value": "6348", "label": "元宝"}, {"value": "6356", "label": "振兴"}, {"value": "6370", "label": "振安"}]
					}, {
						"value": "6190",
						"label": "抚顺",
						"children": [{"value": "6203", "label": "东洲"}, {"value": "6242", "label": "抚顺"}, {
							"value": "6267",
							"label": "清原"
						}, {"value": "6232", "label": "顺城"}, {"value": "6218", "label": "望花"}, {
							"value": "6191",
							"label": "新抚"
						}, {"value": "6251", "label": "新宾"}]
					}, {
						"value": "6644",
						"label": "阜新",
						"children": [{"value": "6686", "label": "阜新"}, {"value": "6645", "label": "海州"}, {
							"value": "6670",
							"label": "清河门"
						}, {"value": "6663", "label": "太平"}, {"value": "6657", "label": "新邱"}, {
							"value": "6677",
							"label": "细河"
						}, {"value": "6724", "label": "彰武"}]
					}, {
						"value": "7167",
						"label": "葫芦岛",
						"children": [{"value": "7243", "label": "建昌"}, {"value": "7168", "label": "连山"}, {
							"value": "7187",
							"label": "龙港"
						}, {"value": "7199", "label": "南票"}, {"value": "7217", "label": "绥中"}, {"value": "7271", "label": "兴城"}]
					}, {
						"value": "6444",
						"label": "锦州",
						"children": [{"value": "6545", "label": "北镇"}, {"value": "6445", "label": "古塔"}, {
							"value": "6483",
							"label": "黑山"
						}, {"value": "6456", "label": "凌河"}, {"value": "6524", "label": "凌海"}, {
							"value": "6468",
							"label": "太和"
						}, {"value": "6505", "label": "义县"}]
					}, {
						"value": "6749",
						"label": "辽阳",
						"children": [{"value": "6750", "label": "白塔"}, {"value": "6803", "label": "灯塔"}, {
							"value": "6774",
							"label": "弓长岭"
						}, {"value": "6767", "label": "宏伟"}, {"value": "6787", "label": "辽阳"}, {
							"value": "6780",
							"label": "太子河"
						}, {"value": "6762", "label": "文圣"}]
					}, {
						"value": "6818",
						"label": "盘锦",
						"children": [{"value": "6849", "label": "大洼"}, {"value": "6867", "label": "盘山"}, {
							"value": "6819",
							"label": "双台子"
						}, {"value": "6830", "label": "兴隆台"}]
					}, {
						"value": "5668",
						"label": "沈阳",
						"children": [{"value": "5699", "label": "大东"}, {"value": "5765", "label": "东陵"}, {
							"value": "5845",
							"label": "法库"
						}, {"value": "5669", "label": "和平"}, {"value": "5714", "label": "皇姑"}, {
							"value": "5829",
							"label": "康平"
						}, {"value": "5808", "label": "辽中"}, {"value": "5683", "label": "沈河"}, {
							"value": "5747",
							"label": "苏家屯"
						}, {"value": "5780", "label": "沈北"}, {"value": "5727", "label": "铁西"}, {
							"value": "5865",
							"label": "新民"
						}, {"value": "5795", "label": "于洪"}]
					}, {
						"value": "6881",
						"label": "铁岭",
						"children": [{"value": "6931", "label": "昌图"}, {"value": "6970", "label": "开原"}, {
							"value": "6891",
							"label": "清河"
						}, {"value": "6897", "label": "铁岭"}, {"value": "6964", "label": "调兵山"}, {
							"value": "6912",
							"label": "西丰"
						}, {"value": "6882", "label": "银州"}]
					}, {
						"value": "6565",
						"label": "营口",
						"children": [{"value": "6583", "label": "鲅鱼圈"}, {"value": "6625", "label": "大石桥"}, {
							"value": "6597",
							"label": "盖州"
						}, {"value": "6591", "label": "老边"}, {"value": "6574", "label": "西市"}, {"value": "6566", "label": "站前"}]
					}]
				}, {
					"value": "6",
					"label": "内蒙古",
					"children": [{
						"value": "5634",
						"label": "阿拉善",
						"children": [{"value": "5635", "label": "阿拉善左旗"}, {"value": "5655", "label": "阿拉善右旗"}, {
							"value": "5663",
							"label": "额济纳旗"
						}]
					}, {
						"value": "4656",
						"label": "包头",
						"children": [{"value": "4712", "label": "白云鄂博矿"}, {"value": "4657", "label": "东河"}, {
							"value": "4740",
							"label": "达尔罕茂明安"
						}, {"value": "4733", "label": "固阳"}, {"value": "4715", "label": "九原"}, {
							"value": "4672",
							"label": "昆都仑"
						}, {"value": "4689", "label": "青山"}, {"value": "4703", "label": "石拐"}, {"value": "4724", "label": "土默特右旗"}]
					}, {
						"value": "5305",
						"label": "巴彦淖尔",
						"children": [{"value": "5337", "label": "磴口"}, {"value": "5373", "label": "杭锦后旗"}, {
							"value": "5306",
							"label": "临河"
						}, {"value": "5327", "label": "五原"}, {"value": "5343", "label": "乌拉特前旗"}, {
							"value": "5355",
							"label": "乌拉特中旗"
						}, {"value": "5366", "label": "乌拉特后旗"}]
					}, {
						"value": "4777",
						"label": "赤峰",
						"children": [{"value": "4827", "label": "阿鲁科尔沁旗"}, {"value": "4932", "label": "敖汉旗"}, {
							"value": "4843",
							"label": "巴林左旗"
						}, {"value": "4857", "label": "巴林右旗"}, {"value": "4778", "label": "红山"}, {
							"value": "4877",
							"label": "克什克腾旗"
						}, {"value": "4906", "label": "喀喇沁旗"}, {"value": "4867", "label": "林西"}, {
							"value": "4916",
							"label": "宁城"
						}, {"value": "4805", "label": "松山"}, {"value": "4891", "label": "翁牛特旗"}, {"value": "4792", "label": "元宝山"}]
					}, {
						"value": "5070",
						"label": "鄂尔多斯",
						"children": [{"value": "5071", "label": "东胜"}, {"value": "5090", "label": "达拉特旗"}, {
							"value": "5118",
							"label": "鄂托克前旗"
						}, {"value": "5123", "label": "鄂托克旗"}, {"value": "5130", "label": "杭锦旗"}, {
							"value": "5137",
							"label": "乌审旗"
						}, {"value": "5144", "label": "伊金霍洛旗"}, {"value": "5104", "label": "准格尔旗"}]
					}, {
						"value": "4571",
						"label": "呼和浩特",
						"children": [{"value": "4582", "label": "回民"}, {"value": "4629", "label": "和林格尔"}, {
							"value": "4638",
							"label": "清水河"
						}, {"value": "4601", "label": "赛罕"}, {"value": "4613", "label": "土默特左旗"}, {
							"value": "4623",
							"label": "托克托"
						}, {"value": "4646", "label": "武川"}, {"value": "4572", "label": "新城"}, {"value": "4591", "label": "玉泉"}]
					}, {
						"value": "5152",
						"label": "呼伦贝尔",
						"children": [{"value": "5169", "label": "阿荣旗"}, {"value": "5220", "label": "陈巴尔虎旗"}, {
							"value": "5195",
							"label": "鄂伦春"
						}, {"value": "5208", "label": "鄂温克"}, {"value": "5286", "label": "额尔古纳"}, {
							"value": "5296",
							"label": "根河"
						}, {"value": "5153", "label": "海拉尔"}, {"value": "5181", "label": "莫力达瓦"}, {
							"value": "5244",
							"label": "满洲里"
						}, {"value": "5228", "label": "新巴尔虎左旗"}, {"value": "5236", "label": "新巴尔虎右旗"}, {
							"value": "5250",
							"label": "牙克石"
						}, {"value": "5162", "label": "扎赉诺尔"}, {"value": "5267", "label": "扎兰屯"}]
					}, {
						"value": "4949",
						"label": "通辽",
						"children": [{"value": "5064", "label": "霍林郭勒"}, {"value": "4950", "label": "科尔沁"}, {
							"value": "4977",
							"label": "科尔沁左翼中旗"
						}, {"value": "4996", "label": "科尔沁左翼后旗"}, {"value": "5012", "label": "开鲁"}, {
							"value": "5023",
							"label": "库伦旗"
						}, {"value": "5033", "label": "奈曼旗"}, {"value": "5048", "label": "扎鲁特旗"}]
					}, {
						"value": "4753",
						"label": "乌海",
						"children": [{"value": "4754", "label": "海勃湾"}, {"value": "4762", "label": "海南"}, {
							"value": "4768",
							"label": "乌达"
						}]
					}, {
						"value": "5383",
						"label": "乌兰察布",
						"children": [{"value": "5428", "label": "察哈尔右翼前旗"}, {"value": "5438", "label": "察哈尔右翼中旗"}, {
							"value": "5450",
							"label": "察哈尔右翼后旗"
						}, {"value": "5453", "label": "丰镇"}, {"value": "5398", "label": "化德"}, {
							"value": "5384",
							"label": "集宁"
						}, {"value": "5419", "label": "凉城"}, {"value": "5399", "label": "商都"}, {
							"value": "5452",
							"label": "四子王旗"
						}, {"value": "5410", "label": "兴和"}, {"value": "5395", "label": "卓资"}]
					}, {
						"value": "5466",
						"label": "兴安",
						"children": [{"value": "5480", "label": "阿尔山"}, {"value": "5489", "label": "科尔沁右翼前旗"}, {
							"value": "5504",
							"label": "科尔沁右翼中旗"
						}, {"value": "5531", "label": "突泉"}, {"value": "5467", "label": "乌兰浩特"}, {"value": "5517", "label": "扎赉特旗"}]
					}, {
						"value": "5541",
						"label": "锡林郭勒",
						"children": [{"value": "5557", "label": "阿巴嘎旗"}, {"value": "5583", "label": "东乌珠穆沁旗"}, {
							"value": "5628",
							"label": "多伦"
						}, {"value": "5542", "label": "二连浩特"}, {"value": "5566", "label": "苏尼特左旗"}, {
							"value": "5575",
							"label": "苏尼特右旗"
						}, {"value": "5602", "label": "太仆寺旗"}, {"value": "5544", "label": "锡林浩特"}, {
							"value": "5594",
							"label": "西乌珠穆沁旗"
						}, {"value": "5610", "label": "镶黄旗"}, {"value": "5614", "label": "正镶白旗"}, {"value": "5620", "label": "正蓝旗"}]
					}]
				}, {
					"value": "31",
					"label": "宁夏",
					"children": [{
						"value": "42200",
						"label": "固原",
						"children": [{"value": "42251", "label": "泾源"}, {"value": "42236", "label": "隆德"}, {
							"value": "42259",
							"label": "彭阳"
						}, {"value": "42216", "label": "西吉"}, {"value": "42201", "label": "原州"}]
					}, {
						"value": "42113",
						"label": "石嘴山",
						"children": [{"value": "42114", "label": "大武口"}, {"value": "42126", "label": "惠农"}, {
							"value": "42139",
							"label": "平罗"
						}]
					}, {
						"value": "42153",
						"label": "吴忠",
						"children": [{"value": "42168", "label": "红寺堡"}, {"value": "42154", "label": "利通"}, {
							"value": "42190",
							"label": "青铜峡"
						}, {"value": "42178", "label": "同心"}, {"value": "42169", "label": "盐池"}]
					}, {
						"value": "42053",
						"label": "银川",
						"children": [{"value": "42095", "label": "贺兰"}, {"value": "42080", "label": "金凤"}, {
							"value": "42102",
							"label": "灵武"
						}, {"value": "42054", "label": "兴庆"}, {"value": "42071", "label": "西夏"}, {"value": "42088", "label": "永宁"}]
					}, {
						"value": "42272",
						"label": "中卫",
						"children": [{"value": "42298", "label": "海原"}, {"value": "42273", "label": "沙坡头"}, {
							"value": "42286",
							"label": "中宁"
						}]
					}]
				}, {
					"value": "30",
					"label": "青海",
					"children": [{
						"value": "41901",
						"label": "果洛",
						"children": [{"value": "41911", "label": "班玛"}, {"value": "41929", "label": "达日"}, {
							"value": "41921",
							"label": "甘德"
						}, {"value": "41940", "label": "久治"}, {"value": "41902", "label": "玛沁"}, {"value": "41947", "label": "玛多"}]
					}, {
						"value": "41686",
						"label": "海东",
						"children": [{"value": "41739", "label": "互助"}, {"value": "41759", "label": "化隆"}, {
							"value": "41687",
							"label": "乐都"
						}, {"value": "41716", "label": "民和"}, {"value": "41707", "label": "平安"}, {"value": "41777", "label": "循化"}]
					}, {
						"value": "41787",
						"label": "海北",
						"children": [{"value": "41816", "label": "刚察"}, {"value": "41809", "label": "海晏"}, {
							"value": "41788",
							"label": "门源"
						}, {"value": "41801", "label": "祁连"}]
					}, {
						"value": "41822",
						"label": "黄南",
						"children": [{"value": "41853", "label": "河南"}, {"value": "41835", "label": "尖扎"}, {
							"value": "41823",
							"label": "同仁"
						}, {"value": "41845", "label": "泽库"}]
					}, {
						"value": "41859",
						"label": "海南",
						"children": [{"value": "41860", "label": "共和"}, {"value": "41878", "label": "贵德"}, {
							"value": "41894",
							"label": "贵南"
						}, {"value": "41872", "label": "同德"}, {"value": "41886", "label": "兴海"}]
					}, {
						"value": "42004",
						"label": "海西",
						"children": [{"value": "42015", "label": "德令哈"}, {"value": "42033", "label": "都兰"}, {
							"value": "42005",
							"label": "格尔木"
						}, {"value": "42042", "label": "天峻"}, {"value": "42028", "label": "乌兰"}]
					}, {
						"value": "41607",
						"label": "西宁",
						"children": [{"value": "41608", "label": "城东"}, {"value": "41616", "label": "城中"}, {
							"value": "41625",
							"label": "城西"
						}, {"value": "41632", "label": "城北"}, {"value": "41638", "label": "大通"}, {
							"value": "41659",
							"label": "湟中"
						}, {"value": "41676", "label": "湟源"}]
					}, {
						"value": "41952",
						"label": "玉树",
						"children": [{"value": "41972", "label": "称多"}, {"value": "41986", "label": "囊谦"}, {
							"value": "41997",
							"label": "曲麻莱"
						}, {"value": "41953", "label": "玉树"}, {"value": "41963", "label": "杂多"}, {"value": "41980", "label": "治多"}]
					}]
				}, {
					"value": "5",
					"label": "山西",
					"children": [{
						"value": "3355",
						"label": "长治",
						"children": [{"value": "3356", "label": "城区"}, {"value": "3376", "label": "长治"}, {
							"value": "3448",
							"label": "长子"
						}, {"value": "3435", "label": "壶关"}, {"value": "3367", "label": "郊区"}, {
							"value": "3425",
							"label": "黎城"
						}, {"value": "3505", "label": "潞城"}, {"value": "3412", "label": "平顺"}, {
							"value": "3476",
							"label": "沁县"
						}, {"value": "3490", "label": "沁源"}, {"value": "3400", "label": "屯留"}, {
							"value": "3461",
							"label": "武乡"
						}, {"value": "3389", "label": "襄垣"}]
					}, {
						"value": "3149",
						"label": "大同",
						"children": [{"value": "3150", "label": "城区"}, {"value": "3292", "label": "大同"}, {
							"value": "3240",
							"label": "广灵"
						}, {"value": "3263", "label": "浑源"}, {"value": "3166", "label": "矿区"}, {
							"value": "3250",
							"label": "灵丘"
						}, {"value": "3195", "label": "南郊"}, {"value": "3228", "label": "天镇"}, {
							"value": "3206",
							"label": "新荣"
						}, {"value": "3214", "label": "阳高"}, {"value": "3282", "label": "左云"}]
					}, {
						"value": "3515",
						"label": "晋城",
						"children": [{"value": "3516", "label": "城区"}, {"value": "3589", "label": "高平"}, {
							"value": "3558",
							"label": "陵川"
						}, {"value": "3524", "label": "沁水"}, {"value": "3539", "label": "阳城"}, {"value": "3571", "label": "泽州"}]
					}, {
						"value": "3685",
						"label": "晋中",
						"children": [{"value": "3727", "label": "和顺"}, {"value": "3819", "label": "介休"}, {
							"value": "3806",
							"label": "灵石"
						}, {"value": "3788", "label": "平遥"}, {"value": "3779", "label": "祁县"}, {
							"value": "3751",
							"label": "寿阳"
						}, {"value": "3766", "label": "太谷"}, {"value": "3738", "label": "昔阳"}, {
							"value": "3686",
							"label": "榆次"
						}, {"value": "3706", "label": "榆社"}, {"value": "3716", "label": "左权"}]
					}, {
						"value": "4206",
						"label": "临汾",
						"children": [{"value": "4292", "label": "安泽"}, {"value": "4330", "label": "大宁"}, {
							"value": "4300",
							"label": "浮山"
						}, {"value": "4364", "label": "汾西"}, {"value": "4284", "label": "古县"}, {
							"value": "4267",
							"label": "洪洞"
						}, {"value": "4372", "label": "侯马"}, {"value": "4381", "label": "霍州"}, {
							"value": "4310",
							"label": "吉县"
						}, {"value": "4354", "label": "蒲县"}, {"value": "4234", "label": "曲沃"}, {
							"value": "4253",
							"label": "襄汾"
						}, {"value": "4319", "label": "乡宁"}, {"value": "4337", "label": "隰县"}, {
							"value": "4207",
							"label": "尧都"
						}, {"value": "4242", "label": "翼城"}, {"value": "4346", "label": "永和"}]
					}, {
						"value": "4394",
						"label": "吕梁",
						"children": [{"value": "4512", "label": "方山"}, {"value": "4554", "label": "汾阳"}, {
							"value": "4421",
							"label": "交城"
						}, {"value": "4528", "label": "交口"}, {"value": "4395", "label": "离石"}, {
							"value": "4449",
							"label": "临县"
						}, {"value": "4473", "label": "柳林"}, {"value": "4499", "label": "岚县"}, {
							"value": "4489",
							"label": "石楼"
						}, {"value": "4408", "label": "文水"}, {"value": "4432", "label": "兴县"}, {
							"value": "4536",
							"label": "孝义"
						}, {"value": "4520", "label": "中阳"}]
					}, {
						"value": "3606",
						"label": "朔州",
						"children": [{"value": "3674", "label": "怀仁"}, {"value": "3623", "label": "平鲁"}, {
							"value": "3607",
							"label": "朔城"
						}, {"value": "3637", "label": "山阴"}, {"value": "3650", "label": "应县"}, {"value": "3663", "label": "右玉"}]
					}, {
						"value": "3032",
						"label": "太原",
						"children": [{"value": "3134", "label": "古交"}, {"value": "3066", "label": "尖草坪"}, {
							"value": "3097",
							"label": "晋源"
						}, {"value": "3125", "label": "娄烦"}, {"value": "3104", "label": "清徐"}, {
							"value": "3081",
							"label": "万柏林"
						}, {"value": "3033", "label": "小店"}, {"value": "3052", "label": "杏花岭"}, {
							"value": "3043",
							"label": "迎泽"
						}, {"value": "3114", "label": "阳曲"}]
					}, {
						"value": "3999",
						"label": "忻州",
						"children": [{"value": "4159", "label": "保德"}, {"value": "4021", "label": "定襄"}, {
							"value": "4051",
							"label": "代县"
						}, {"value": "4063", "label": "繁峙"}, {"value": "4145", "label": "河曲"}, {
							"value": "4093",
							"label": "静乐"
						}, {"value": "4132", "label": "岢岚"}, {"value": "4077", "label": "宁武"}, {
							"value": "4173",
							"label": "偏关"
						}, {"value": "4108", "label": "神池"}, {"value": "4031", "label": "五台"}, {
							"value": "4119",
							"label": "五寨"
						}, {"value": "4000", "label": "忻府"}, {"value": "4184", "label": "原平"}]
					}, {
						"value": "3306",
						"label": "阳泉",
						"children": [{"value": "3307", "label": "城区"}, {"value": "3320", "label": "郊区"}, {
							"value": "3314",
							"label": "矿区"
						}, {"value": "3329", "label": "平定"}, {"value": "3340", "label": "盂县"}]
					}, {
						"value": "3835",
						"label": "运城",
						"children": [{"value": "3988", "label": "河津"}, {"value": "3901", "label": "稷山"}, {
							"value": "3920",
							"label": "绛县"
						}, {"value": "3858", "label": "临猗"}, {"value": "3955", "label": "平陆"}, {
							"value": "3966",
							"label": "芮城"
						}, {"value": "3873", "label": "万荣"}, {"value": "3888", "label": "闻喜"}, {
							"value": "3909",
							"label": "新绛"
						}, {"value": "3943", "label": "夏县"}, {"value": "3836", "label": "盐湖"}, {
							"value": "3931",
							"label": "垣曲"
						}, {"value": "3977", "label": "永济"}]
					}]
				}, {
					"value": "16",
					"label": "山东",
					"children": [{
						"value": "18851",
						"label": "滨州",
						"children": [{"value": "18852", "label": "滨城"}, {"value": "18921", "label": "博兴"}, {
							"value": "18868",
							"label": "惠民"
						}, {"value": "18895", "label": "无棣"}, {"value": "18884", "label": "阳信"}, {
							"value": "18908",
							"label": "沾化"
						}, {"value": "18934", "label": "邹平"}]
					}, {
						"value": "17628",
						"label": "东营",
						"children": [{"value": "17629", "label": "东营"}, {"value": "17664", "label": "广饶"}, {
							"value": "17640",
							"label": "河口"
						}, {"value": "17647", "label": "垦利"}, {"value": "17655", "label": "利津"}]
					}, {
						"value": "18560",
						"label": "德州",
						"children": [{"value": "18561", "label": "德城"}, {"value": "18574", "label": "陵县"}, {
							"value": "18611",
							"label": "临邑"
						}, {"value": "18677", "label": "乐陵"}, {"value": "18588", "label": "宁津"}, {
							"value": "18640",
							"label": "平原"
						}, {"value": "18601", "label": "庆云"}, {"value": "18624", "label": "齐河"}, {
							"value": "18668",
							"label": "武城"
						}, {"value": "18653", "label": "夏津"}, {"value": "18694", "label": "禹城"}]
					}, {
						"value": "18951",
						"label": "菏泽",
						"children": [{"value": "18976", "label": "曹县"}, {"value": "19019", "label": "成武"}, {
							"value": "18996",
							"label": "单县"
						}, {"value": "19081", "label": "定陶"}, {"value": "19094", "label": "东明"}, {
							"value": "19022",
							"label": "巨野"
						}, {"value": "19063", "label": "鄄城"}, {"value": "18952", "label": "牡丹"}, {"value": "19040", "label": "郓城"}]
					}, {
						"value": "17166",
						"label": "济南",
						"children": [{"value": "17253", "label": "长清"}, {"value": "17200", "label": "槐荫"}, {
							"value": "17273",
							"label": "济阳"
						}, {"value": "17167", "label": "历下"}, {"value": "17231", "label": "历城"}, {
							"value": "17264",
							"label": "平阴"
						}, {"value": "17182", "label": "市中"}, {"value": "17284", "label": "商河"}, {
							"value": "17215",
							"label": "天桥"
						}, {"value": "17297", "label": "章丘"}]
					}, {
						"value": "17973",
						"label": "济宁",
						"children": [{"value": "18023", "label": "金乡"}, {"value": "18037", "label": "嘉祥"}, {
							"value": "18083",
							"label": "梁山"
						}, {"value": "18097", "label": "曲阜"}, {"value": "17984", "label": "任城"}, {
							"value": "17974",
							"label": "市中"
						}, {"value": "18069", "label": "泗水"}, {"value": "17995", "label": "微山"}, {
							"value": "18053",
							"label": "汶上"
						}, {"value": "18011", "label": "鱼台"}, {"value": "18110", "label": "兖州"}, {"value": "18123", "label": "邹城"}]
					}, {
						"value": "18367",
						"label": "莱芜",
						"children": [{"value": "18384", "label": "钢城"}, {"value": "18368", "label": "莱城"}]
					}, {
						"value": "18390",
						"label": "临沂",
						"children": [{"value": "18475", "label": "苍山"}, {"value": "18493", "label": "费县"}, {
							"value": "18414",
							"label": "河东"
						}, {"value": "18521", "label": "莒南"}, {"value": "18391", "label": "兰山"}, {
							"value": "18404",
							"label": "罗庄"
						}, {"value": "18549", "label": "临沭"}, {"value": "18538", "label": "蒙阴"}, {
							"value": "18506",
							"label": "平邑"
						}, {"value": "18442", "label": "郯城"}, {"value": "18426", "label": "沂南"}, {"value": "18456", "label": "沂水"}]
					}, {
						"value": "18706",
						"label": "聊城",
						"children": [{"value": "18776", "label": "茌平"}, {"value": "18707", "label": "东昌府"}, {
							"value": "18791",
							"label": "东阿"
						}, {"value": "18802", "label": "冠县"}, {"value": "18821", "label": "高唐"}, {
							"value": "18834",
							"label": "临清"
						}, {"value": "18751", "label": "莘县"}, {"value": "18732", "label": "阳谷"}]
					}, {
						"value": "17318",
						"label": "青岛",
						"children": [{"value": "17394", "label": "城阳"}, {"value": "17354", "label": "黄岛"}, {
							"value": "17403",
							"label": "胶州"
						}, {"value": "17416", "label": "即墨"}, {"value": "17377", "label": "崂山"}, {
							"value": "17382",
							"label": "李沧"
						}, {"value": "17450", "label": "莱西"}, {"value": "17432", "label": "平度"}, {
							"value": "17319",
							"label": "市南"
						}, {"value": "17330", "label": "市北"}]
					}, {
						"value": "18308",
						"label": "日照",
						"children": [{"value": "18309", "label": "东港"}, {"value": "18345", "label": "莒县"}, {
							"value": "18322",
							"label": "岚山"
						}, {"value": "18332", "label": "五莲"}]
					}, {
						"value": "18139",
						"label": "泰安",
						"children": [{"value": "18149", "label": "岱岳"}, {"value": "18181", "label": "东平"}, {
							"value": "18217",
							"label": "肥城"
						}, {"value": "18168", "label": "宁阳"}, {"value": "18140", "label": "泰山"}, {"value": "18196", "label": "新泰"}]
					}, {
						"value": "17841",
						"label": "潍坊",
						"children": [{"value": "17939", "label": "安丘"}, {"value": "17887", "label": "昌乐"}, {
							"value": "17963",
							"label": "昌邑"
						}, {"value": "17857", "label": "坊子"}, {"value": "17952", "label": "高密"}, {
							"value": "17849",
							"label": "寒亭"
						}, {"value": "17865", "label": "奎文"}, {"value": "17876", "label": "临朐"}, {
							"value": "17897",
							"label": "青州"
						}, {"value": "17924", "label": "寿光"}, {"value": "17842", "label": "潍城"}, {"value": "17910", "label": "诸城"}]
					}, {
						"value": "18232",
						"label": "威海",
						"children": [{"value": "18233", "label": "环翠"}, {"value": "18269", "label": "荣成"}, {
							"value": "18292",
							"label": "乳山"
						}, {"value": "18251", "label": "文登"}]
					}, {
						"value": "17674",
						"label": "烟台",
						"children": [{"value": "17722", "label": "长岛"}, {"value": "17688", "label": "福山"}, {
							"value": "17826",
							"label": "海阳"
						}, {"value": "17714", "label": "莱山"}, {"value": "17731", "label": "龙口"}, {
							"value": "17745",
							"label": "莱阳"
						}, {"value": "17764", "label": "莱州"}, {"value": "17700", "label": "牟平"}, {
							"value": "17782",
							"label": "蓬莱"
						}, {"value": "17810", "label": "栖霞"}, {"value": "17675", "label": "芝罘"}, {"value": "17795", "label": "招远"}]
					}, {
						"value": "17462",
						"label": "淄博",
						"children": [{"value": "17491", "label": "博山"}, {"value": "17536", "label": "高青"}, {
							"value": "17526",
							"label": "桓台"
						}, {"value": "17502", "label": "临淄"}, {"value": "17546", "label": "沂源"}, {
							"value": "17463",
							"label": "淄川"
						}, {"value": "17477", "label": "张店"}, {"value": "17515", "label": "周村"}]
					}, {
						"value": "17559",
						"label": "枣庄",
						"children": [{"value": "17560", "label": "市中"}, {"value": "17595", "label": "山亭"}, {
							"value": "17588",
							"label": "台儿庄"
						}, {"value": "17606", "label": "滕州"}, {"value": "17570", "label": "薛城"}, {"value": "17580", "label": "峄城"}]
					}]
				}, {
					"value": "24",
					"label": "四川",
					"children": [{
						"value": "33539",
						"label": "阿坝",
						"children": [{"value": "33725", "label": "阿坝"}, {"value": "33679", "label": "黑水"}, {
							"value": "33763",
							"label": "红原"
						}, {"value": "33615", "label": "九寨沟"}, {"value": "33633", "label": "金川"}, {
							"value": "33553",
							"label": "理县"
						}, {"value": "33567", "label": "茂县"}, {"value": "33697", "label": "马尔康"}, {
							"value": "33712",
							"label": "壤塘"
						}, {"value": "33745", "label": "若尔盖"}, {"value": "33589", "label": "松潘"}, {
							"value": "33540",
							"label": "汶川"
						}, {"value": "33657", "label": "小金"}]
					}, {
						"value": "33158",
						"label": "巴中",
						"children": [{"value": "33159", "label": "巴州"}, {"value": "33190", "label": "恩阳"}, {
							"value": "33265",
							"label": "南江"
						}, {"value": "33314", "label": "平昌"}, {"value": "33215", "label": "通江"}]
					}, {
						"value": "29894",
						"label": "成都",
						"children": [{"value": "29961", "label": "成华"}, {"value": "30204", "label": "崇州"}, {
							"value": "30090",
							"label": "大邑"
						}, {"value": "30137", "label": "都江堰"}, {"value": "30179", "label": "邛崃"}, {
							"value": "29895",
							"label": "锦江"
						}, {"value": "29927", "label": "金牛"}, {"value": "30026", "label": "金堂"}, {
							"value": "29976",
							"label": "龙泉驿"
						}, {"value": "30074", "label": "郫县"}, {"value": "30111", "label": "蒲江"}, {
							"value": "30158",
							"label": "彭州"
						}, {"value": "29912", "label": "青羊"}, {"value": "29989", "label": "青白江"}, {
							"value": "30048",
							"label": "双流"
						}, {"value": "29943", "label": "武侯"}, {"value": "30015", "label": "温江"}, {
							"value": "30001",
							"label": "新都"
						}, {"value": "30124", "label": "新津"}]
					}, {
						"value": "30560",
						"label": "德阳",
						"children": [{"value": "30636", "label": "广汉"}, {"value": "30561", "label": "旌阳"}, {
							"value": "30625",
							"label": "罗江"
						}, {"value": "30672", "label": "绵竹"}, {"value": "30655", "label": "什邡"}, {"value": "30579", "label": "中江"}]
					}, {
						"value": "32684",
						"label": "达州",
						"children": [{"value": "32708", "label": "达川"}, {"value": "32841", "label": "大竹"}, {
							"value": "32820",
							"label": "开江"
						}, {"value": "32892", "label": "渠县"}, {"value": "32685", "label": "通川"}, {
							"value": "32953",
							"label": "万源"
						}, {"value": "32765", "label": "宣汉"}]
					}, {
						"value": "30997",
						"label": "广元",
						"children": [{"value": "31049", "label": "朝天"}, {"value": "31206", "label": "苍溪"}, {
							"value": "31148",
							"label": "剑阁"
						}, {"value": "30998", "label": "利州"}, {"value": "31111", "label": "青川"}, {
							"value": "31075",
							"label": "旺苍"
						}, {"value": "31019", "label": "元坝"}]
					}, {
						"value": "32497",
						"label": "广安",
						"children": [{"value": "32498", "label": "广安"}, {"value": "32670", "label": "华蓥"}, {
							"value": "32624",
							"label": "邻水"
						}, {"value": "32535", "label": "前锋"}, {"value": "32593", "label": "武胜"}, {"value": "32549", "label": "岳池"}]
					}, {
						"value": "33775",
						"label": "甘孜",
						"children": [{"value": "33974", "label": "白玉"}, {"value": "34058", "label": "巴塘"}, {
							"value": "33811",
							"label": "丹巴"
						}, {"value": "33864", "label": "道孚"}, {"value": "33947", "label": "德格"}, {
							"value": "34090",
							"label": "稻城"
						}, {"value": "34105", "label": "得荣"}, {"value": "33904", "label": "甘孜"}, {
							"value": "33827",
							"label": "九龙"
						}, {"value": "33776", "label": "康定"}, {"value": "33798", "label": "泸定"}, {
							"value": "33887",
							"label": "炉霍"
						}, {"value": "34033", "label": "理塘"}, {"value": "33992", "label": "石渠"}, {
							"value": "34015",
							"label": "色达"
						}, {"value": "33927", "label": "新龙"}, {"value": "34077", "label": "乡城"}, {"value": "33846", "label": "雅江"}]
					}, {
						"value": "30410",
						"label": "泸州",
						"children": [{"value": "30533", "label": "古蔺"}, {"value": "30479", "label": "合江"}, {
							"value": "30411",
							"label": "江阳"
						}, {"value": "30445", "label": "龙马潭"}, {"value": "30459", "label": "泸县"}, {
							"value": "30430",
							"label": "纳溪"
						}, {"value": "30507", "label": "叙永"}]
					}, {
						"value": "31503",
						"label": "乐山",
						"children": [{"value": "31674", "label": "峨边"}, {"value": "31714", "label": "峨眉山"}, {
							"value": "31565",
							"label": "金口河"
						}, {"value": "31572", "label": "犍为"}, {"value": "31603", "label": "井研"}, {
							"value": "31631",
							"label": "夹江"
						}, {"value": "31654", "label": "沐川"}, {"value": "31694", "label": "马边"}, {
							"value": "31504",
							"label": "市中"
						}, {"value": "31537", "label": "沙湾"}, {"value": "31552", "label": "五通桥"}]
					}, {
						"value": "34118",
						"label": "凉山",
						"children": [{"value": "34411", "label": "布拖"}, {"value": "34228", "label": "德昌"}, {
							"value": "34631",
							"label": "甘洛"
						}, {"value": "34251", "label": "会理"}, {"value": "34302", "label": "会东"}, {
							"value": "34442",
							"label": "金阳"
						}, {"value": "34697", "label": "雷波"}, {"value": "34163", "label": "木里"}, {
							"value": "34550",
							"label": "冕宁"
						}, {"value": "34660", "label": "美姑"}, {"value": "34350", "label": "宁南"}, {
							"value": "34376",
							"label": "普格"
						}, {"value": "34119", "label": "西昌"}, {"value": "34525", "label": "喜德"}, {
							"value": "34193",
							"label": "盐源"
						}, {"value": "34589", "label": "越西"}, {"value": "34477", "label": "昭觉"}]
					}, {
						"value": "30694",
						"label": "绵阳",
						"children": [{"value": "30851", "label": "安县"}, {"value": "30902", "label": "北川"}, {
							"value": "30695",
							"label": "涪城"
						}, {"value": "30952", "label": "江油"}, {"value": "30926", "label": "平武"}, {
							"value": "30751",
							"label": "三台"
						}, {"value": "30721", "label": "游仙"}, {"value": "30814", "label": "盐亭"}, {"value": "30869", "label": "梓潼"}]
					}, {
						"value": "32164",
						"label": "眉山",
						"children": [{"value": "32165", "label": "东坡"}, {"value": "32283", "label": "丹棱"}, {
							"value": "32267",
							"label": "洪雅"
						}, {"value": "32253", "label": "彭山"}, {"value": "32291", "label": "青神"}, {"value": "32192", "label": "仁寿"}]
					}, {
						"value": "31378",
						"label": "内江",
						"children": [{"value": "31400", "label": "东兴"}, {"value": "31483", "label": "隆昌"}, {
							"value": "31379",
							"label": "市中"
						}, {"value": "31428", "label": "威远"}, {"value": "31449", "label": "资中"}]
					}, {
						"value": "31734",
						"label": "南充",
						"children": [{"value": "31764", "label": "高坪"}, {"value": "31797", "label": "嘉陵"}, {
							"value": "32113",
							"label": "阆中"
						}, {"value": "31843", "label": "南部"}, {"value": "31970", "label": "蓬安"}, {
							"value": "31735",
							"label": "顺庆"
						}, {"value": "32068", "label": "西充"}, {"value": "31916", "label": "营山"}, {"value": "32010", "label": "仪陇"}]
					}, {
						"value": "30345",
						"label": "攀枝花",
						"children": [{"value": "30346", "label": "东区"}, {"value": "30381", "label": "米易"}, {
							"value": "30365",
							"label": "仁和"
						}, {"value": "30357", "label": "西区"}, {"value": "30394", "label": "盐边"}]
					}, {
						"value": "31246",
						"label": "遂宁",
						"children": [{"value": "31276", "label": "安居"}, {"value": "31247", "label": "船山"}, {
							"value": "31366",
							"label": "大英"
						}, {"value": "31300", "label": "蓬溪"}, {"value": "31333", "label": "射洪"}]
					}, {
						"value": "32302",
						"label": "宜宾",
						"children": [{"value": "32303", "label": "翠屏"}, {"value": "32390", "label": "长宁"}, {
							"value": "32409",
							"label": "高县"
						}, {"value": "32429", "label": "珙县"}, {"value": "32371", "label": "江安"}, {
							"value": "32447",
							"label": "筠连"
						}, {"value": "32328", "label": "南溪"}, {"value": "32481", "label": "屏山"}, {
							"value": "32466",
							"label": "兴文"
						}, {"value": "32344", "label": "宜宾"}]
					}, {
						"value": "33006",
						"label": "雅安",
						"children": [{"value": "33148", "label": "宝兴"}, {"value": "33073", "label": "汉源"}, {
							"value": "33138",
							"label": "芦山"
						}, {"value": "33030", "label": "名山"}, {"value": "33104", "label": "石棉"}, {
							"value": "33122",
							"label": "天全"
						}, {"value": "33007", "label": "雨城"}, {"value": "33051", "label": "荥经"}]
					}, {
						"value": "30230",
						"label": "自贡",
						"children": [{"value": "30259", "label": "大安"}, {"value": "30318", "label": "富顺"}, {
							"value": "30245",
							"label": "贡井"
						}, {"value": "30290", "label": "荣县"}, {"value": "30276", "label": "沿滩"}, {"value": "30231", "label": "自流井"}]
					}, {
						"value": "33359",
						"label": "资阳",
						"children": [{"value": "33387", "label": "安岳"}, {"value": "33483", "label": "简阳"}, {
							"value": "33457",
							"label": "乐至"
						}, {"value": "33360", "label": "雁江"}]
					}]
				}, {
					"value": "28",
					"label": "陕西",
					"children": [{
						"value": "39846",
						"label": "安康",
						"children": [{"value": "40005", "label": "白河"}, {"value": "39847", "label": "汉滨"}, {
							"value": "39882",
							"label": "汉阴"
						}, {"value": "39944", "label": "岚皋"}, {"value": "39909", "label": "宁陕"}, {
							"value": "39960",
							"label": "平利"
						}, {"value": "39897", "label": "石泉"}, {"value": "39982", "label": "旬阳"}, {
							"value": "39922",
							"label": "紫阳"
						}, {"value": "39972", "label": "镇坪"}]
					}, {
						"value": "38858",
						"label": "宝鸡",
						"children": [{"value": "38882", "label": "陈仓"}, {"value": "38900", "label": "凤翔"}, {
							"value": "38924",
							"label": "扶风"
						}, {"value": "38972", "label": "凤县"}, {"value": "38870", "label": "金台"}, {
							"value": "38942",
							"label": "陇县"
						}, {"value": "38964", "label": "麟游"}, {"value": "38933", "label": "眉县"}, {
							"value": "38913",
							"label": "岐山"
						}, {"value": "38955", "label": "千阳"}, {"value": "38982", "label": "太白"}, {"value": "38859", "label": "渭滨"}]
					}, {
						"value": "39452",
						"label": "汉中",
						"children": [{"value": "39492", "label": "城固"}, {"value": "39643", "label": "佛坪"}, {
							"value": "39453",
							"label": "汉台"
						}, {"value": "39593", "label": "略阳"}, {"value": "39634", "label": "留坝"}, {
							"value": "39551",
							"label": "勉县"
						}, {"value": "39469", "label": "南郑"}, {"value": "39571", "label": "宁强"}, {
							"value": "39532",
							"label": "西乡"
						}, {"value": "39511", "label": "洋县"}, {"value": "39612", "label": "镇巴"}]
					}, {
						"value": "40018",
						"label": "商洛",
						"children": [{"value": "40064", "label": "丹凤"}, {"value": "40044", "label": "洛南"}, {
							"value": "40019",
							"label": "商州"
						}, {"value": "40081", "label": "商南"}, {"value": "40095", "label": "山阳"}, {
							"value": "40119",
							"label": "镇安"
						}, {"value": "40140", "label": "柞水"}]
					}, {
						"value": "38812",
						"label": "铜川",
						"children": [{"value": "38813", "label": "王益"}, {"value": "38821", "label": "印台"}, {
							"value": "38832",
							"label": "耀州"
						}, {"value": "38848", "label": "宜君"}]
					}, {
						"value": "39160",
						"label": "渭南",
						"children": [{"value": "39264", "label": "白水"}, {"value": "39235", "label": "澄城"}, {
							"value": "39203",
							"label": "大荔"
						}, {"value": "39275", "label": "富平"}, {"value": "39185", "label": "华县"}, {
							"value": "39222",
							"label": "合阳"
						}, {"value": "39293", "label": "韩城"}, {"value": "39306", "label": "华阴"}, {
							"value": "39161",
							"label": "临渭"
						}, {"value": "39246", "label": "蒲城"}, {"value": "39196", "label": "潼关"}]
					}, {
						"value": "38621",
						"label": "西安",
						"children": [{"value": "38632", "label": "碑林"}, {"value": "38651", "label": "灞桥"}, {
							"value": "38715",
							"label": "长安"
						}, {"value": "38803", "label": "高陵"}, {"value": "38786", "label": "户县"}, {
							"value": "38641",
							"label": "莲湖"
						}, {"value": "38691", "label": "临潼"}, {"value": "38741", "label": "蓝田"}, {
							"value": "38661",
							"label": "未央"
						}, {"value": "38622", "label": "新城"}, {"value": "38674", "label": "雁塔"}, {
							"value": "38683",
							"label": "阎良"
						}, {"value": "38763", "label": "周至"}]
					}, {
						"value": "38989",
						"label": "咸阳",
						"children": [{"value": "39088", "label": "彬县"}, {"value": "39102", "label": "长武"}, {
							"value": "39124",
							"label": "淳化"
						}, {"value": "39032", "label": "泾阳"}, {"value": "39063", "label": "礼泉"}, {
							"value": "38990",
							"label": "秦都"
						}, {"value": "39046", "label": "乾县"}, {"value": "39020", "label": "三原"}, {
							"value": "39009",
							"label": "渭城"
						}, {"value": "39137", "label": "武功"}, {"value": "39112", "label": "旬邑"}, {
							"value": "39146",
							"label": "兴平"
						}, {"value": "39003", "label": "杨陵"}, {"value": "39076", "label": "永寿"}]
					}, {
						"value": "39313",
						"label": "延安",
						"children": [{"value": "39366", "label": "安塞"}, {"value": "39314", "label": "宝塔"}, {
							"value": "39402",
							"label": "富县"
						}, {"value": "39395", "label": "甘泉"}, {"value": "39436", "label": "黄龙"}, {
							"value": "39444",
							"label": "黄陵"
						}, {"value": "39413", "label": "洛川"}, {"value": "39385", "label": "吴起"}, {
							"value": "39334",
							"label": "延长"
						}, {"value": "39344", "label": "延川"}, {"value": "39426", "label": "宜川"}, {
							"value": "39355",
							"label": "子长"
						}, {"value": "39376", "label": "志丹"}]
					}, {
						"value": "39652",
						"label": "榆林",
						"children": [{"value": "39747", "label": "定边"}, {"value": "39698", "label": "府谷"}, {
							"value": "39714",
							"label": "横山"
						}, {"value": "39729", "label": "靖边"}, {"value": "39795", "label": "佳县"}, {
							"value": "39784",
							"label": "米脂"
						}, {"value": "39818", "label": "清涧"}, {"value": "39682", "label": "神木"}, {
							"value": "39768",
							"label": "绥德"
						}, {"value": "39811", "label": "吴堡"}, {"value": "39653", "label": "榆阳"}, {"value": "39831", "label": "子洲"}]
					}]
				}, {
					"value": "47141",
					"label": "上海",
					"children": [{
						"value": "10",
						"label": "上海",
						"children": [{"value": "9751", "label": "宝山"}, {"value": "9679", "label": "长宁"}, {
							"value": "9863",
							"label": "崇明"
						}, {"value": "9852", "label": "奉贤"}, {"value": "9654", "label": "黄浦"}, {
							"value": "9716",
							"label": "虹口"
						}, {"value": "9690", "label": "静安"}, {"value": "9764", "label": "嘉定"}, {
							"value": "9813",
							"label": "金山"
						}, {"value": "9738", "label": "闵行"}, {"value": "9696", "label": "普陀"}, {
							"value": "9776",
							"label": "浦东"
						}, {"value": "9840", "label": "青浦"}, {"value": "9824", "label": "松江"}, {
							"value": "9665",
							"label": "徐汇"
						}, {"value": "9725", "label": "杨浦"}, {"value": "9706", "label": "闸北"}]
					}]
				}, {
					"value": "43459",
					"label": "台湾",
					"children": [{"value": "43491", "label": "高雄"}, {"value": "43506", "label": "花莲"}, {
						"value": "43492",
						"label": "基隆"
					}, {"value": "43496", "label": "嘉义"}, {"value": "43499", "label": "苗栗"}, {
						"value": "43501",
						"label": "南投"
					}, {"value": "43504", "label": "屏东"}, {"value": "43507", "label": "澎湖"}, {
						"value": "43490",
						"label": "台北"
					}, {"value": "43493", "label": "台中"}, {"value": "43494", "label": "台南"}, {
						"value": "43498",
						"label": "桃园"
					}, {"value": "43505", "label": "台东"}, {"value": "43495", "label": "新竹"}, {
						"value": "43497",
						"label": "宜兰"
					}, {"value": "43502", "label": "云林"}, {"value": "43500", "label": "彰化"}]
				}, {
					"value": "47139",
					"label": "天津",
					"children": [{
						"value": "3",
						"label": "天津",
						"children": [{"value": "470", "label": "北辰"}, {"value": "516", "label": "宝坻"}, {
							"value": "542",
							"label": "滨海"
						}, {"value": "438", "label": "东丽"}, {"value": "369", "label": "和平"}, {
							"value": "376",
							"label": "河东"
						}, {"value": "390", "label": "河西"}, {"value": "416", "label": "河北"}, {
							"value": "427",
							"label": "红桥"
						}, {"value": "460", "label": "津南"}, {"value": "583", "label": "静海"}, {
							"value": "603",
							"label": "蓟县"
						}, {"value": "404", "label": "南开"}, {"value": "569", "label": "宁河"}, {
							"value": "485",
							"label": "武清"
						}, {"value": "450", "label": "西青"}]
					}]
				}, {
					"value": "27",
					"label": "西藏",
					"children": [{
						"value": "38514",
						"label": "阿里",
						"children": [{"value": "38553", "label": "措勤"}, {"value": "38527", "label": "噶尔"}, {
							"value": "38539",
							"label": "革吉"
						}, {"value": "38545", "label": "改则"}, {"value": "38515", "label": "普兰"}, {
							"value": "38533",
							"label": "日土"
						}, {"value": "38519", "label": "札达"}]
					}, {
						"value": "37922",
						"label": "昌都地",
						"children": [{"value": "38005", "label": "八宿"}, {"value": "38060", "label": "边坝"}, {
							"value": "37923",
							"label": "昌都"
						}, {"value": "37991", "label": "察雅"}, {"value": "37977", "label": "丁青"}, {
							"value": "37953",
							"label": "贡觉"
						}, {"value": "37939", "label": "江达"}, {"value": "37966", "label": "类乌齐"}, {
							"value": "38048",
							"label": "洛隆"
						}, {"value": "38031", "label": "芒康"}, {"value": "38020", "label": "左贡"}]
					}, {
						"value": "37848",
						"label": "拉萨",
						"children": [{"value": "37849", "label": "城关"}, {"value": "37873", "label": "当雄"}, {
							"value": "37898",
							"label": "堆龙德庆"
						}, {"value": "37906", "label": "达孜"}, {"value": "37862", "label": "林周"}, {
							"value": "37913",
							"label": "墨竹工卡"
						}, {"value": "37882", "label": "尼木"}, {"value": "37891", "label": "曲水"}]
					}, {
						"value": "38559",
						"label": "林芝",
						"children": [{"value": "38596", "label": "波密"}, {"value": "38607", "label": "察隅"}, {
							"value": "38568",
							"label": "工布江达"
						}, {"value": "38560", "label": "林芝"}, {"value": "38614", "label": "朗县"}, {
							"value": "38578",
							"label": "米林"
						}, {"value": "38587", "label": "墨脱"}]
					}, {
						"value": "38388",
						"label": "那曲",
						"children": [{"value": "38435", "label": "安多"}, {"value": "38413", "label": "比如"}, {
							"value": "38469",
							"label": "班戈"
						}, {"value": "38480", "label": "巴青"}, {"value": "38402", "label": "嘉黎"}, {
							"value": "38389",
							"label": "那曲"
						}, {"value": "38424", "label": "聂荣"}, {"value": "38491", "label": "尼玛"}, {
							"value": "38449",
							"label": "申扎"
						}, {"value": "38458", "label": "索县"}, {"value": "38506", "label": "双湖"}]
					}, {
						"value": "38166",
						"label": "日喀则",
						"children": [{"value": "38256", "label": "昂仁"}, {"value": "38294", "label": "白朗"}, {
							"value": "38218",
							"label": "定日"
						}, {"value": "38326", "label": "定结"}, {"value": "38382", "label": "岗巴"}, {
							"value": "38198",
							"label": "江孜"
						}, {"value": "38359", "label": "吉隆"}, {"value": "38316", "label": "康马"}, {
							"value": "38244",
							"label": "拉孜"
						}, {"value": "38180", "label": "南木林"}, {"value": "38365", "label": "聂拉木"}, {
							"value": "38167",
							"label": "日喀则"
						}, {"value": "38306", "label": "仁布"}, {"value": "38232", "label": "萨迦"}, {
							"value": "38373",
							"label": "萨嘎"
						}, {"value": "38274", "label": "谢通门"}, {"value": "38351", "label": "亚东"}, {"value": "38337", "label": "仲巴"}]
					}, {
						"value": "38072",
						"label": "山南",
						"children": [{"value": "38112", "label": "措美"}, {"value": "38145", "label": "错那"}, {
							"value": "38087",
							"label": "贡嘎"
						}, {"value": "38125", "label": "加查"}, {"value": "38117", "label": "洛扎"}, {
							"value": "38133",
							"label": "隆子"
						}, {"value": "38155", "label": "浪卡子"}, {"value": "38073", "label": "乃东"}, {
							"value": "38101",
							"label": "琼结"
						}, {"value": "38106", "label": "曲松"}, {"value": "38096", "label": "桑日"}, {"value": "38081", "label": "扎囊"}]
					}]
				}, {
					"value": "32",
					"label": "新疆",
					"children": [{
						"value": "42724",
						"label": "阿克苏",
						"children": [{"value": "42725", "label": "阿克苏"}, {"value": "42814", "label": "阿瓦提"}, {
							"value": "42789",
							"label": "拜城"
						}, {"value": "42749", "label": "库车"}, {"value": "42823", "label": "柯坪"}, {
							"value": "42769",
							"label": "沙雅"
						}, {"value": "42738", "label": "温宿"}, {"value": "42804", "label": "乌什"}, {"value": "42780", "label": "新和"}]
					}, {
						"value": "43369",
						"label": "阿勒泰",
						"children": [{"value": "43370", "label": "阿勒泰"}, {"value": "43385", "label": "布尔津"}, {
							"value": "43393",
							"label": "富蕴"
						}, {"value": "43404", "label": "福海"}, {"value": "43411", "label": "哈巴河"}, {
							"value": "43427",
							"label": "吉木乃"
						}, {"value": "43419", "label": "青河"}]
					}, {
						"value": "42598",
						"label": "博尔塔拉蒙古",
						"children": [{"value": "42608", "label": "阿拉山口"}, {"value": "42599", "label": "博乐"}, {
							"value": "42611",
							"label": "精河"
						}, {"value": "42617", "label": "温泉"}]
					}, {
						"value": "42624",
						"label": "巴音郭楞蒙古",
						"children": [{"value": "42716", "label": "博湖"}, {"value": "42695", "label": "和静"}, {
							"value": "42708",
							"label": "和硕"
						}, {"value": "42625", "label": "库尔勒"}, {"value": "42643", "label": "轮台"}, {
							"value": "42673",
							"label": "且末"
						}, {"value": "42664", "label": "若羌"}, {"value": "42655", "label": "尉犁"}, {"value": "42686", "label": "焉耆"}]
					}, {
						"value": "42514",
						"label": "昌吉",
						"children": [{"value": "42515", "label": "昌吉"}, {"value": "42532", "label": "阜康"}, {
							"value": "42543",
							"label": "呼图壁"
						}, {"value": "42578", "label": "吉木萨尔"}, {"value": "42551", "label": "玛纳斯"}, {
							"value": "42588",
							"label": "木垒"
						}, {"value": "42563", "label": "奇台"}]
					}, {
						"value": "42468",
						"label": "哈密",
						"children": [{"value": "42493", "label": "巴里坤"}, {"value": "42469", "label": "哈密"}, {
							"value": "42506",
							"label": "伊吾"
						}]
					}, {
						"value": "43057",
						"label": "和田",
						"children": [{"value": "43129", "label": "策勒"}, {"value": "43058", "label": "和田"}, {
							"value": "43071",
							"label": "和田"
						}, {"value": "43118", "label": "洛浦"}, {"value": "43084", "label": "墨玉"}, {
							"value": "43154",
							"label": "民丰"
						}, {"value": "43101", "label": "皮山"}, {"value": "43138", "label": "于田"}]
					}, {
						"value": "42415",
						"label": "克拉玛依",
						"children": [{"value": "42428", "label": "白碱滩"}, {"value": "42416", "label": "独山子"}, {
							"value": "42420",
							"label": "克拉玛依"
						}, {"value": "42431", "label": "乌尔禾"}]
					}, {
						"value": "42829",
						"label": "克孜勒苏柯尔克孜",
						"children": [{"value": "42830", "label": "阿图什"}, {"value": "42840", "label": "阿克陶"}, {
							"value": "42855",
							"label": "阿合奇"
						}, {"value": "42862", "label": "乌恰"}]
					}, {
						"value": "42874",
						"label": "喀什",
						"children": [{"value": "43032", "label": "巴楚"}, {"value": "43018", "label": "伽师"}, {
							"value": "42875",
							"label": "喀什"
						}, {"value": "42997", "label": "麦盖提"}, {"value": "42889", "label": "疏附"}, {
							"value": "42902",
							"label": "疏勒"
						}, {"value": "42946", "label": "莎车"}, {"value": "43045", "label": "塔什库尔干"}, {
							"value": "42918",
							"label": "英吉沙"
						}, {"value": "42976", "label": "叶城"}, {"value": "43008", "label": "岳普湖"}, {"value": "42933", "label": "泽普"}]
					}, {
						"value": "42434",
						"label": "吐鲁番",
						"children": [{"value": "42448", "label": "鄯善"}, {"value": "42435", "label": "吐鲁番"}, {
							"value": "42459",
							"label": "托克逊"
						}]
					}, {
						"value": "43288",
						"label": "塔城",
						"children": [{"value": "43320", "label": "额敏"}, {"value": "43360", "label": "和布克赛尔蒙古"}, {
							"value": "43332",
							"label": "沙湾"
						}, {"value": "43289", "label": "塔城"}, {"value": "43345", "label": "托里"}, {
							"value": "43299",
							"label": "乌苏"
						}, {"value": "43353", "label": "裕民"}]
					}, {
						"value": "42316",
						"label": "乌鲁木齐",
						"children": [{"value": "42386", "label": "达坂城"}, {"value": "42394", "label": "米东"}, {
							"value": "42336",
							"label": "沙依巴克"
						}, {"value": "42371", "label": "水磨沟"}, {"value": "42317", "label": "天山"}, {
							"value": "42380",
							"label": "头屯河"
						}, {"value": "42408", "label": "乌鲁木齐"}, {"value": "42352", "label": "新市"}]
					}, {
						"value": "43162",
						"label": "伊犁",
						"children": [{"value": "43208", "label": "察布查尔锡伯"}, {"value": "43236", "label": "巩留"}, {
							"value": "43223",
							"label": "霍城"
						}, {"value": "43181", "label": "奎屯"}, {"value": "43277", "label": "尼勒克"}, {
							"value": "43268",
							"label": "特克斯"
						}, {"value": "43245", "label": "新源"}, {"value": "43163", "label": "伊宁市"}, {
							"value": "43189",
							"label": "伊宁县"
						}, {"value": "43257", "label": "昭苏"}]
					}]
				}, {
					"value": "43457",
					"label": "香港",
					"children": [{
						"value": "43460",
						"label": "九龙",
						"children": [{"value": "43461", "label": "观塘"}, {"value": "43462", "label": "黄大仙"}, {
							"value": "43463",
							"label": "九龙城"
						}, {"value": "43464", "label": "深水涉"}, {"value": "43465", "label": "油尖旺"}]
					}, {
						"value": "43466",
						"label": "香港岛",
						"children": [{"value": "43467", "label": "东区"}, {"value": "43468", "label": "南区"}, {
							"value": "43469",
							"label": "湾仔"
						}, {"value": "43470", "label": "中西"}]
					}, {
						"value": "43471",
						"label": "新界",
						"children": [{"value": "43472", "label": "北区"}, {"value": "43473", "label": "大埔"}, {
							"value": "43474",
							"label": "葵青"
						}, {"value": "43475", "label": "离岛"}, {"value": "43476", "label": "荃湾"}, {
							"value": "43477",
							"label": "沙田"
						}, {"value": "43478", "label": "屯门"}, {"value": "43479", "label": "西贡"}, {"value": "43480", "label": "元朗"}]
					}]
				}, {
					"value": "26",
					"label": "云南",
					"children": [{
						"value": "36693",
						"label": "保山",
						"children": [{"value": "36757", "label": "昌宁"}, {"value": "36694", "label": "隆阳"}, {
							"value": "36746",
							"label": "龙陵"
						}, {"value": "36713", "label": "施甸"}, {"value": "36727", "label": "腾冲"}]
					}, {
						"value": "37194",
						"label": "楚雄",
						"children": [{"value": "37195", "label": "楚雄"}, {"value": "37248", "label": "大姚"}, {
							"value": "37292",
							"label": "禄丰"
						}, {"value": "37219", "label": "牟定"}, {"value": "37227", "label": "南华"}, {
							"value": "37211",
							"label": "双柏"
						}, {"value": "37280", "label": "武定"}, {"value": "37238", "label": "姚安"}, {
							"value": "37261",
							"label": "永仁"
						}, {"value": "37269", "label": "元谋"}]
					}, {
						"value": "37602",
						"label": "大理",
						"children": [{"value": "37635", "label": "宾川"}, {"value": "37603", "label": "大理"}, {
							"value": "37695",
							"label": "洱源"
						}, {"value": "37714", "label": "鹤庆"}, {"value": "37705", "label": "剑川"}, {
							"value": "37646",
							"label": "弥渡"
						}, {"value": "37655", "label": "南涧"}, {"value": "37664", "label": "巍山"}, {
							"value": "37624",
							"label": "祥云"
						}, {"value": "37614", "label": "漾濞"}, {"value": "37675", "label": "永平"}, {"value": "37683", "label": "云龙"}]
					}, {
						"value": "37724",
						"label": "德宏",
						"children": [{"value": "37745", "label": "梁河"}, {"value": "37771", "label": "陇川"}, {
							"value": "37732",
							"label": "芒市"
						}, {"value": "37725", "label": "瑞丽"}, {"value": "37755", "label": "盈江"}]
					}, {
						"value": "37815",
						"label": "迪庆",
						"children": [{"value": "37828", "label": "德钦"}, {"value": "37837", "label": "维西"}, {
							"value": "37816",
							"label": "香格里拉"
						}]
					}, {
						"value": "37307",
						"label": "红河",
						"children": [{"value": "37308", "label": "个旧"}, {"value": "37409", "label": "红河"}, {
							"value": "37447",
							"label": "河口"
						}, {"value": "37360", "label": "建水"}, {"value": "37423", "label": "金平"}, {
							"value": "37319",
							"label": "开远"
						}, {"value": "37385", "label": "泸西"}, {"value": "37437", "label": "绿春"}, {
							"value": "37327",
							"label": "蒙自"
						}, {"value": "37339", "label": "弥勒"}, {"value": "37352", "label": "屏边"}, {
							"value": "37375",
							"label": "石屏"
						}, {"value": "37394", "label": "元阳"}]
					}, {
						"value": "36341",
						"label": "昆明",
						"children": [{"value": "36475", "label": "安宁"}, {"value": "36397", "label": "呈贡"}, {
							"value": "36388",
							"label": "东川"
						}, {"value": "36416", "label": "富民"}, {"value": "36366", "label": "官渡"}, {
							"value": "36408",
							"label": "晋宁"
						}, {"value": "36443", "label": "禄劝"}, {"value": "36353", "label": "盘龙"}, {
							"value": "36432",
							"label": "石林"
						}, {"value": "36438", "label": "嵩明"}, {"value": "36342", "label": "五华"}, {
							"value": "36377",
							"label": "西山"
						}, {"value": "36460", "label": "寻甸"}, {"value": "36423", "label": "宜良"}]
					}, {
						"value": "36926",
						"label": "丽江",
						"children": [{"value": "36927", "label": "古城"}, {"value": "36970", "label": "华坪"}, {
							"value": "36978",
							"label": "宁蒗"
						}, {"value": "36937", "label": "玉龙"}, {"value": "36954", "label": "永胜"}]
					}, {
						"value": "37108",
						"label": "临沧",
						"children": [{"value": "37183", "label": "沧源"}, {"value": "37120", "label": "凤庆"}, {
							"value": "37173",
							"label": "耿马"
						}, {"value": "37109", "label": "临翔"}, {"value": "37166", "label": "双江"}, {
							"value": "37134",
							"label": "云县"
						}, {"value": "37147", "label": "永德"}, {"value": "37158", "label": "镇康"}]
					}, {
						"value": "37781",
						"label": "怒江",
						"children": [{"value": "37792", "label": "福贡"}, {"value": "37800", "label": "贡山"}, {
							"value": "37782",
							"label": "泸水"
						}, {"value": "37806", "label": "兰坪"}]
					}, {
						"value": "36994",
						"label": "普洱",
						"children": [{"value": "37029", "label": "景东"}, {"value": "37043", "label": "景谷"}, {
							"value": "37064",
							"label": "江城"
						}, {"value": "37079", "label": "澜沧"}, {"value": "37013", "label": "墨江"}, {
							"value": "37072",
							"label": "孟连"
						}, {"value": "37003", "label": "宁洱"}, {"value": "36995", "label": "思茅"}, {
							"value": "37100",
							"label": "西盟"
						}, {"value": "37054", "label": "镇沅"}]
					}, {
						"value": "36484",
						"label": "曲靖",
						"children": [{"value": "36539", "label": "富源"}, {"value": "36551", "label": "会泽"}, {
							"value": "36506",
							"label": "陆良"
						}, {"value": "36526", "label": "罗平"}, {"value": "36497", "label": "马龙"}, {
							"value": "36485",
							"label": "麒麟"
						}, {"value": "36517", "label": "师宗"}, {"value": "36582", "label": "宣威"}, {"value": "36573", "label": "沾益"}]
					}, {
						"value": "37454",
						"label": "文山",
						"children": [{"value": "37553", "label": "富宁"}, {"value": "37534", "label": "广南"}, {
							"value": "37495",
							"label": "麻栗坡"
						}, {"value": "37507", "label": "马关"}, {"value": "37521", "label": "丘北"}, {
							"value": "37455",
							"label": "文山"
						}, {"value": "37485", "label": "西畴"}, {"value": "37473", "label": "砚山"}]
					}, {
						"value": "37567",
						"label": "西双版纳",
						"children": [{"value": "37568", "label": "景洪"}, {"value": "37580", "label": "勐海"}, {
							"value": "37592",
							"label": "勐腊"
						}]
					}, {
						"value": "36609",
						"label": "玉溪",
						"children": [{"value": "36630", "label": "澄江"}, {"value": "36661", "label": "峨山"}, {
							"value": "36610",
							"label": "红塔"
						}, {"value": "36647", "label": "华宁"}, {"value": "36622", "label": "江川"}, {
							"value": "36637",
							"label": "通海"
						}, {"value": "36670", "label": "新平"}, {"value": "36653", "label": "易门"}, {"value": "36682", "label": "元江"}]
					}, {
						"value": "36770",
						"label": "昭通",
						"children": [{"value": "36833", "label": "大关"}, {"value": "36792", "label": "鲁甸"}, {
							"value": "36805",
							"label": "巧家"
						}, {"value": "36859", "label": "绥江"}, {"value": "36921", "label": "水富"}, {
							"value": "36910",
							"label": "威信"
						}, {"value": "36822", "label": "盐津"}, {"value": "36843", "label": "永善"}, {
							"value": "36894",
							"label": "彝良"
						}, {"value": "36771", "label": "昭阳"}, {"value": "36865", "label": "镇雄"}]
					}]
				}, {
					"value": "12",
					"label": "浙江",
					"children": [{
						"value": "11292",
						"label": "杭州",
						"children": [{"value": "11344", "label": "滨江"}, {"value": "11412", "label": "淳安"}, {
							"value": "11453",
							"label": "富阳"
						}, {"value": "11320", "label": "拱墅"}, {"value": "11309", "label": "江干"}, {
							"value": "11436",
							"label": "建德"
						}, {"value": "11478", "label": "临安"}, {"value": "11293", "label": "上城"}, {
							"value": "11397",
							"label": "桐庐"
						}, {"value": "11300", "label": "下城"}, {"value": "11331", "label": "西湖"}, {
							"value": "11348",
							"label": "萧山"
						}, {"value": "11376", "label": "余杭"}]
					}, {
						"value": "11874",
						"label": "湖州",
						"children": [{"value": "11933", "label": "安吉"}, {"value": "11916", "label": "长兴"}, {
							"value": "11904",
							"label": "德清"
						}, {"value": "11894", "label": "南浔"}, {"value": "11875", "label": "吴兴"}]
					}, {
						"value": "11793",
						"label": "嘉兴",
						"children": [{"value": "11828", "label": "海盐"}, {"value": "11838", "label": "海宁"}, {
							"value": "11818",
							"label": "嘉善"
						}, {"value": "11794", "label": "南湖"}, {"value": "11851", "label": "平湖"}, {
							"value": "11861",
							"label": "桐乡"
						}, {"value": "11808", "label": "秀洲"}]
					}, {
						"value": "12071",
						"label": "金华",
						"children": [{"value": "12198", "label": "东阳"}, {"value": "12100", "label": "金东"}, {
							"value": "12167",
							"label": "兰溪"
						}, {"value": "12131", "label": "浦江"}, {"value": "12147", "label": "磐安"}, {
							"value": "12072",
							"label": "婺城"
						}, {"value": "12112", "label": "武义"}, {"value": "12184", "label": "义乌"}, {"value": "12217", "label": "永康"}]
					}, {
						"value": "12526",
						"label": "丽水",
						"children": [{"value": "12575", "label": "缙云"}, {"value": "12664", "label": "景宁"}, {
							"value": "12527",
							"label": "莲都"
						}, {"value": "12684", "label": "龙泉"}, {"value": "12544", "label": "青田"}, {
							"value": "12645",
							"label": "庆元"
						}, {"value": "12594", "label": "遂昌"}, {"value": "12614", "label": "松阳"}, {"value": "12634", "label": "云和"}]
					}, {
						"value": "11497",
						"label": "宁波",
						"children": [{"value": "11525", "label": "北仑"}, {"value": "11624", "label": "慈溪"}, {
							"value": "11644",
							"label": "奉化"
						}, {"value": "11498", "label": "海曙"}, {"value": "11507", "label": "江东"}, {
							"value": "11516",
							"label": "江北"
						}, {"value": "11584", "label": "宁海"}, {"value": "11565", "label": "象山"}, {
							"value": "11540",
							"label": "鄞州"
						}, {"value": "11602", "label": "余姚"}, {"value": "11534", "label": "镇海"}]
					}, {
						"value": "12232",
						"label": "衢州",
						"children": [{"value": "12272", "label": "常山"}, {"value": "12322", "label": "江山"}, {
							"value": "12233",
							"label": "柯城"
						}, {"value": "12287", "label": "开化"}, {"value": "12306", "label": "龙游"}, {"value": "12251", "label": "衢江"}]
					}, {
						"value": "11947",
						"label": "绍兴",
						"children": [{"value": "11963", "label": "绍兴"}, {"value": "12027", "label": "上虞"}, {
							"value": "12049",
							"label": "嵊州"
						}, {"value": "11983", "label": "新昌"}, {"value": "11948", "label": "越城"}, {"value": "12000", "label": "诸暨"}]
					}, {
						"value": "12383",
						"label": "台州",
						"children": [{"value": "12394", "label": "黄岩"}, {"value": "12384", "label": "椒江"}, {
							"value": "12413",
							"label": "路桥"
						}, {"value": "12506", "label": "临海"}, {"value": "12437", "label": "三门"}, {
							"value": "12451",
							"label": "天台"
						}, {"value": "12488", "label": "温岭"}, {"value": "12467", "label": "仙居"}, {"value": "12425", "label": "玉环"}]
					}, {
						"value": "11656",
						"label": "温州",
						"children": [{"value": "11728", "label": "苍南"}, {"value": "11691", "label": "洞头"}, {
							"value": "11657",
							"label": "鹿城"
						}, {"value": "11666", "label": "龙湾"}, {"value": "11776", "label": "乐清"}, {
							"value": "11678",
							"label": "瓯海"
						}, {"value": "11717", "label": "平阳"}, {"value": "11760", "label": "瑞安"}, {
							"value": "11749",
							"label": "泰顺"
						}, {"value": "11741", "label": "文成"}, {"value": "11698", "label": "永嘉"}]
					}, {
						"value": "12343",
						"label": "舟山",
						"children": [{"value": "12344", "label": "定海"}, {"value": "12367", "label": "岱山"}, {
							"value": "12357",
							"label": "普陀"
						}, {"value": "12375", "label": "嵊泗"}]
					}]
				}]
			}
		}
	}
</script>