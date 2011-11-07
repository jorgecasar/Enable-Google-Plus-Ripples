var enableRipples = {
	ripplesActivityUrl: '//plus.google.com/ripples/details?activityid=',
	lang: document.documentElement.lang,
	messages: {
		'de':  { 'public': 'Öffentlich',     'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'bg':  { 'public': 'Обществено',     'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ca':  { 'public': 'Públic',         'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'cs':  { 'public': 'Veřejně',        'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		//'zh':  { 'public': ['公开', '公開'],     'no-ripples': 'No Ripples',  'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ko':  { 'public': '공개',             'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'hr':  { 'public': 'Javno',          'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'da':  { 'public': 'Offentlig',      'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'sk':  { 'public': 'Verejné',        'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'sl':  { 'public': 'Javno',          'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'es':  { 'public': 'Público',        'no-ripples': 'Sin Ripples',   'no-shared': 'Nadie ha compartido esta actualización', 'no-public': 'Esta actualización no es pública' },
		'et':  { 'public': 'Avalik',         'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'fil': { 'public': 'Pampubliko',     'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'fi':  { 'public': 'Julkinen',       'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'fr':  { 'public': 'En mode public', 'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'el':  { 'public': 'Δημόσιο',        'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'iw':  { 'public': 'גלוי לכולם',     'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'hi':  { 'public': 'सार्वजनिक',      'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'hu':  { 'public': 'Nyilvános',      'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'in':  { 'public': 'Publik',         'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'en':  { 'public': 'Public',         'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'it':  { 'public': 'Pubblico',       'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'jp':  { 'public': '一般公開',           'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'lv':  { 'public': 'Publisks',       'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ltr': { 'public': 'Vieša',          'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ms':  { 'public': 'Awam',           'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'nl':  { 'public': 'Openbaar',       'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'no':  { 'public': 'Offentlig',      'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'fa':  { 'public': 'عمومی',          'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'pl':  { 'public': 'Publiczny',      'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'pt':  { 'public': 'Público',        'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ro':  { 'public': 'Public',         'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ru':  { 'public': 'Для всех',       'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'sr':  { 'public': 'Јавно',          'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'sv':  { 'public': 'Offentligt',     'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'th':  { 'public': 'สาธารณะ',        'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'tr':  { 'public': 'Herkese açık',   'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'uk':  { 'public': 'Для всіх',       'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'vi':  { 'public': 'Công khai',      'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' },
		'ar':  { 'public': 'عام',            'no-ripples': 'No Ripples',    'no-shared': 'No one has shared this update',          'no-public': 'This update isn\'t public' }
	},
	init: function()
	{
		var myThis = this;
		this.setMessages();
		this.addRipplesLink();
		setInterval(
			function(){
				myThis.addRipplesLink();
			},
			10000
		);
	},
	setMessages: function()
	{
		if( ! this.messages[this.lang] )
		{
			this.lang = 'en';
		}
		this.messages = this.messages[this.lang];
	},
	addRipplesLink: function()
	{
		var myThis = this;
		var $update = $('div[id*="update-"]');
		$update.find('.mo').append(function(index){
			var $this = $(this),
				appendText = '';
			// There aren't ripples link yet.
			if( $this.find('span.ripples').length == 0 )
			{
				// The update is public.
				if( myThis.messages['public'] == $this.find('span[role="button"]').html() )
				{
					// The update was shared.
					if( $update.eq(index).find('.Qx').length != 0 )
					{
						var activityid = $this.find('a').attr('href').match(/^.*\/(.*)$/)[1];
						appendText = ' &nbsp;-&nbsp; <span class="ripples"><a href="' + myThis.ripplesActivityUrl + activityid + '" target="_blank" class="il">Ripples</a></span>';
						activityid = null;
					}
					else
					{
						appendText = ' &nbsp;-&nbsp; <span class="ripples" title="' + myThis.messages['no-shared'] + '">' + myThis.messages['no-ripples'] + '</span>';
					}
				}
				else
				{
					appendText = ' &nbsp;-&nbsp; <span class="ripples" title="' + myThis.messages['no-public'] + '">' + myThis.messages['no-ripples'] + '</span>';
				}
				public_html = null;
			}
			$this = null;
			return appendText;
		});
		$update = null;
	}
};
enableRipples.init();