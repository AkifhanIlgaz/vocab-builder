import { DefaultWordsLength } from './firebase'

const words = [
	{
		id: 3,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/able_1',
		word: 'able',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/abl/able_/able__gb_1.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/abl/able_/able__us_2.mp3' }, partOfSpeech: 'adjective', CEFRLevel: 'A2' },
		definitions: [
			{ meaning: 'having the skill, intelligence, opportunity, etc. needed to do something', examples: ['You must be able to speak French for this job.', 'A viral illness left her \u003cspan class="cl"\u003ebarely able\u003c/span\u003e to walk.', 'We\u0026#39;re still \u003cspan class="cl"\u003eable to get\u003c/span\u003e visas to come and go from Thailand.', 'I didn\u0026#39;t feel able to disagree with him.', 'Will you be able to come?', 'Are you really \u003cspan class="cl"\u003ewilling and able\u003c/span\u003e to do what is necessary?', 'They don\u0026#39;t even seem \u003cspan class="cl"\u003eable to see\u003c/span\u003e what\u0026#39;s good about their ideas.', 'These families are less able to afford a balanced, healthy diet.'] },
			{ meaning: 'intelligent; good at something', examples: ['She\u0026#39;s the ablest student in the class.'] }
		],
		idioms: null
	},
	{
		id: 56,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/achieve',
		word: 'achieve',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/ach/achie/achieving__gb_1.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/ach/achie/achieving__us_1.mp3' }, partOfSpeech: 'verb', CEFRLevel: 'A2' },
		definitions: [
			{ meaning: 'to succeed in reaching a particular goal, status or standard, especially by making an effort for a long time', examples: ['He had finally \u003cspan class="cl"\u003eachieved success\u003c/span\u003e.', 'They have both \u003cspan class="cl"\u003eachieved \u003c/span\u003egreat \u003cspan class="cl"\u003eresults\u003c/span\u003e. ', 'She has worked hard to \u003cspan class="cl"\u003eachieve her goal\u003c/span\u003e.', 'to \u003cspan class="cl"\u003eachieve an objective/aim\u003c/span\u003e', 'They could not achieve their target of less than 3% inflation.', 'The firm has achieved the status of undisputed market leader.', 'Course objectives were achieved through a range of activities. '] },
			{ meaning: 'to succeed in doing something or causing something to happen', examples: ['I haven\u0026#39;t achieved very much today.', 'All you\u0026#39;ve achieved is to upset my parents.'] },
			{ meaning: 'to be successful', examples: ['Their background gives them little chance of achieving at school.', 'These students need to achieve academically in order to enter the labour market.'] }
		],
		idioms: null
	},
	{
		id: 77,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/actually',
		word: 'actually',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/act/actua/actually__gb_5.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/act/actua/actually__us_1_rr.mp3' }, partOfSpeech: 'adverb', CEFRLevel: 'A2' },
		definitions: [
			{ meaning: 'used in speaking to emphasize a fact or a comment, or that something is really true', examples: ['What did she actually say?', 'It\u0026#39;s not actually raining now.', 'The book was never actually published. ', 'I\u0026#39;m glad we were actually able to get the message across.', 'That\u0026#39;s the only reason I\u0026#39;m actually going.', 'There are lots of people there who can actually help you.', 'I didn\u0026#39;t want to say anything without actually reading the letter first.'] },
			{ meaning: 'used to show a contrast between what is true and what somebody believes, and to show surprise about this contrast', examples: ['It was actually kind of fun after all.', 'The food was not actually all that expensive.', 'Our turnover actually increased last year.', 'I couldn\u0026#39;t believe it had all actually happened.'] },
			{ meaning: 'used to correct somebody in a polite way', examples: ['We\u0026#39;re not American, actually. We\u0026#39;re Canadian.', 'Actually, it would be much more sensible to do it later.', 'They\u0026#39;re not married, actually.'] },
			{ meaning: 'used to get somebody’s attention, to introduce a new topic or to say something that somebody may not like, in a polite way', examples: ['Actually, I\u0026#39;ll be a bit late home.', 'Actually, I\u0026#39;m busy at the moment—can I call you back?', '\u003cspan class="cl"\u003eWell, actually\u003c/span\u003e, I think she\u0026#39;s done a pretty good job.'] }
		],
		idioms: null
	},
	{
		id: 2346,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/gold_1',
		word: 'gold',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/g/gol/gold_/gold__gb_3.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/g/gol/gold_/gold__us_1.mp3' }, partOfSpeech: 'noun', CEFRLevel: 'A2' },
		definitions: [
			{ meaning: 'a chemical element. Gold is a yellow precious metal used for making coins, jewellery, beautiful objects, etc.', examples: ['\u003cspan class="cl"\u003egold coins/jewellery\u003c/span\u003e', 'He always wore a gold chain. ', 'a gold ring/watch/necklace/bracelet', 'a fall in the \u003cspan class="cl"\u003egold price\u003c/span\u003e', 'The rubies were set in 18-carat gold.', 'made of \u003cspan class="cl"\u003esolid/pure gold\u003c/span\u003e'] },
			{ meaning: 'money, jewellery, etc. that is made of gold', examples: ['The hotel was dripping with \u003cspan class="gloss" htag="span" hclass="gloss"\u003e(= decorated with a lot of)\u003c/span\u003e gold.', 'They\u0026#39;re stockpiling dollars the way nations used to hoard gold.', 'the country’s gold reserves', 'falling government gold stocks'] },
			{ meaning: 'a medal made of gold that is given to the winner of a race or competition', examples: ['The team look set to \u003cspan class="cl"\u003ewin\u003c/span\u003e Olympic \u003cspan class="cl"\u003egold\u003c/span\u003e.', 'He won three golds and a bronze.'] },
			{ meaning: 'the colour of gold', examples: ['a sunset of burnished gold', 'His hair was a pale gold.', 'I love the reds and golds of autumn.'] }
		],
		idioms: [
			{ usage: 'all that glitters/glistens/glisters is not gold ', definition: [{ meaning: 'not everything that seems good, attractive, etc. is actually good, etc.', examples: null }] },
			{ usage: 'a crock/pot of gold ', definition: [{ meaning: 'a large prize or reward that somebody hopes for but is unlikely to get', examples: null }] },
			{ usage: '(as) good as gold ', definition: [{ meaning: 'behaving in a way that other people approve of', examples: ['The kids have been as good as gold all day.'] }] },
			{ usage: 'have a heart of gold ', definition: [{ meaning: 'to be a very kind person', examples: null }] },
			{ usage: 'the streets are paved with gold ', definition: [{ meaning: 'used to say that it seems easy to make money in a place', examples: null }] },
			{ usage: 'strike gold ', definition: [{ meaning: 'to find or do something that brings you a lot of success or money', examples: ['He has struck gold with his latest novel.'] }] },
			{ usage: 'worth your/its weight in gold ', definition: [{ meaning: 'very useful or valuable', examples: ['A good mechanic is worth his weight in gold.'] }] }
		]
	},
	{
		id: 1145,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/contribution',
		word: 'contribution',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/x/xco/xcont/xcontribution__gb_1.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/x/xco/xcont/xcontribution__us_1.mp3' }, partOfSpeech: 'noun', CEFRLevel: 'B2' },
		definitions: [
			{ meaning: 'a gift or payment that is made to a person or an organization in order to help pay for something', examples: ['All contributions will be gratefully received.', 'We rely entirely on \u003cspan class="cl"\u003evoluntary contributions\u003c/span\u003e.', '\u003cspan class="cl"\u003ecampaign contributions\u003c/span\u003e', 'to \u003cspan class="cl"\u003emake a\u003c/span\u003e substantial \u003cspan class="cl"\u003econtribution\u003c/span\u003e to charity', '\u003cspan class="cl"\u003evaluable contributions\u003c/span\u003e towards the upkeep of the cathedral', 'She argued that a greater contribution towards reducing Britain\u0026#39;s record debts should be asked of the better off.', 'Financial contributions from individuals paid for office and printing expenses.'] },
			{ meaning: 'a sum of money that you pay regularly to your employer or the government in order to pay for benefits such as health insurance, a pension, etc.', examples: ['\u003cspan class="cl"\u003epension contributions\u003c/span\u003e', 'National Insurance contributions', 'You can increase your monthly contributions to the pension plan.', 'Pension funds base retirement income on the level of contributions from employees and employers.'] },
			{ meaning: 'an action or a service that helps to cause or increase something, usually (but not necessarily) something good or valuable', examples: ['He \u003cspan class="cl"\u003emade a\u003c/span\u003e very positive \u003cspan class="cl"\u003econtribution\u003c/span\u003e to the success of the project.', 'a \u003cspan class="cl"\u003esignificant contribution\u003c/span\u003e to scientific knowledge', 'The star is being given the award for his ‘\u003cspan class="cl"\u003eoutstanding contribution\u003c/span\u003e to the entertainment field’.', 'This book represents a \u003cspan class="cl"\u003emajor contribution\u003c/span\u003e to our understanding of the Holocaust.', 'She feels the world has overlooked his crucial \u003cspan class="cl"\u003econtribution to the development\u003c/span\u003e of rock and roll.', 'the car’s contribution to the greenhouse effect', 'She was honoured posthumously for her contribution towards the war effort.', 'These measures would make a \u003cspan class="cl"\u003evaluable contribution\u003c/span\u003e towards reducing industrial accidents.', 'She says the US needs to do more to \u003cspan class="cl"\u003erecognize the contributions\u003c/span\u003e of women and minorities to society.', 'They studied the relative contribution of various risk factors for bowel cancer.'] },
			{ meaning: 'an item that forms part of a book, magazine, website broadcast, discussion, etc.', examples: ['All contributions for the May issue must be received by Friday.', 'an \u003cspan class="cl"\u003eimportant contribution\u003c/span\u003e to the debate', 'Thank you for your contributions to the blog.', 'There are no contributions by scholars based in North America.'] },
			{ meaning: 'the act of giving something, especially money, to help a person or an organization', examples: ['The institute is totally funded by \u003cspan class="cl"\u003evoluntary contribution\u003c/span\u003e.'] }
		],
		idioms: null
	},
	{
		id: 2547,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/home_3',
		word: 'home',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/h/hom/home_/home__gb_1.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/h/hom/home_/home__us_1.mp3' }, partOfSpeech: 'adjective', CEFRLevel: 'A2' },
		definitions: [
			{ meaning: 'connected with the place where you live', examples: ['\u003cspan class="cl"\u003ehome life\u003c/span\u003e \u003cspan class="gloss" htag="span" hclass="gloss"\u003e(= with your family)\u003c/span\u003e', 'a person’s \u003cspan class="cl"\u003ehome address/country\u003c/span\u003e', 'We offer customers a free \u003cspan class="cl"\u003ehome delivery\u003c/span\u003e service.'] },
			{ meaning: 'made or used at home', examples: ['We have a home movie of my dad teaching me to swim.', 'She missed her mother\u0026#39;s home cooking.', 'a \u003cspan class="cl"\u003ehome computer\u003c/span\u003e'] },
			{ meaning: 'connected with your own country rather than foreign countries', examples: ['products for the home market', 'the party\u0026#39;s spokesman for \u003cspan class="cl"\u003ehome affairs\u003c/span\u003e'] },
			{ meaning: 'connected with a team’s own sports ground', examples: ['a \u003cspan class="cl"\u003ehome game/match/win\u003c/span\u003e', 'the \u003cspan class="cl"\u003ehome team/side\u003c/span\u003e', 'Rangers were playing in front of their \u003cspan class="cl"\u003ehome crowd\u003c/span\u003e.'] }
		],
		idioms: null
	},
	{
		id: 1145,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/contribution',
		word: 'contribution',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/x/xco/xcont/xcontribution__gb_1.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/x/xco/xcont/xcontribution__us_1.mp3' }, partOfSpeech: 'noun', CEFRLevel: 'B2' },
		definitions: [
			{ meaning: 'a gift or payment that is made to a person or an organization in order to help pay for something', examples: ['All contributions will be gratefully received.', 'We rely entirely on \u003cspan class="cl"\u003evoluntary contributions\u003c/span\u003e.', '\u003cspan class="cl"\u003ecampaign contributions\u003c/span\u003e', 'to \u003cspan class="cl"\u003emake a\u003c/span\u003e substantial \u003cspan class="cl"\u003econtribution\u003c/span\u003e to charity', '\u003cspan class="cl"\u003evaluable contributions\u003c/span\u003e towards the upkeep of the cathedral', 'She argued that a greater contribution towards reducing Britain\u0026#39;s record debts should be asked of the better off.', 'Financial contributions from individuals paid for office and printing expenses.'] },
			{ meaning: 'a sum of money that you pay regularly to your employer or the government in order to pay for benefits such as health insurance, a pension, etc.', examples: ['\u003cspan class="cl"\u003epension contributions\u003c/span\u003e', 'National Insurance contributions', 'You can increase your monthly contributions to the pension plan.', 'Pension funds base retirement income on the level of contributions from employees and employers.'] },
			{ meaning: 'an action or a service that helps to cause or increase something, usually (but not necessarily) something good or valuable', examples: ['He \u003cspan class="cl"\u003emade a\u003c/span\u003e very positive \u003cspan class="cl"\u003econtribution\u003c/span\u003e to the success of the project.', 'a \u003cspan class="cl"\u003esignificant contribution\u003c/span\u003e to scientific knowledge', 'The star is being given the award for his ‘\u003cspan class="cl"\u003eoutstanding contribution\u003c/span\u003e to the entertainment field’.', 'This book represents a \u003cspan class="cl"\u003emajor contribution\u003c/span\u003e to our understanding of the Holocaust.', 'She feels the world has overlooked his crucial \u003cspan class="cl"\u003econtribution to the development\u003c/span\u003e of rock and roll.', 'the car’s contribution to the greenhouse effect', 'She was honoured posthumously for her contribution towards the war effort.', 'These measures would make a \u003cspan class="cl"\u003evaluable contribution\u003c/span\u003e towards reducing industrial accidents.', 'She says the US needs to do more to \u003cspan class="cl"\u003erecognize the contributions\u003c/span\u003e of women and minorities to society.', 'They studied the relative contribution of various risk factors for bowel cancer.'] },
			{ meaning: 'an item that forms part of a book, magazine, website broadcast, discussion, etc.', examples: ['All contributions for the May issue must be received by Friday.', 'an \u003cspan class="cl"\u003eimportant contribution\u003c/span\u003e to the debate', 'Thank you for your contributions to the blog.', 'There are no contributions by scholars based in North America.'] },
			{ meaning: 'the act of giving something, especially money, to help a person or an organization', examples: ['The institute is totally funded by \u003cspan class="cl"\u003evoluntary contribution\u003c/span\u003e.'] }
		],
		idioms: null
	},
	{
		id: 588,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/board_2',
		word: 'board',
		header: { audio: { UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/b/boa/board/boarding__gb_2.mp3', US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/b/boa/board/boarding__us_2.mp3' }, partOfSpeech: 'verb', CEFRLevel: 'B1' },
		definitions: [
			{ meaning: 'to get on a ship, train, plane, bus, etc.', examples: ['Passengers are waiting to board.', 'He tried to \u003cspan class="cl"\u003eboard a plane\u003c/span\u003e at Nice airport. ', 'to \u003cspan class="cl"\u003eboard a bus/train/ship/flight\u003c/span\u003e', 'The ship was boarded by customs officials.', 'She boarded a train for Philadelphia.'] },
			{ meaning: 'when a plane or ship is boarding, it is ready for passengers to get on', examples: ['Flight BA193 for Paris is now boarding at Gate 37.'] },
			{ meaning: 'to live and take meals in somebody’s home, in return for payment', examples: ['She always had one or two students boarding with her.', 'He boarded at his aunt’s house until he found a place of his own.'] },
			{ meaning: 'to live at a school during the school year', examples: null }
		],
		idioms: null
	}
]

export const increment = index => {
	if (index + 1 == DefaultWordsLength) {
		// TODO:Get another 10 words
		// TODO: Set words
		return index
	}
	return ++index
}

export const decrement = index => {
	// TODO: Show alert, breadcrumb
	if (index - 1 === -1) {
		return index
	}
	return --index
}

export default words
