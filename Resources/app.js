//config
var config_list = [
    {
        page_title: 'Hot',
        tab_title: 'Hot',
        url: 'tabs/hot.js'
    },
    {
        page_title: 'New',
        tab_title: 'New',
        url: 'tabs/new.js'
    },
    {
        page_title: 'Popular',
        tab_title: 'Popular',
        url: 'tabs/popular.js'
    }
];

// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
wins = tabs = {};
for (var c=0;c < config_list.length;c++){
    	
     wins[c] = Titanium.UI.createWindow({  
         title:config_list[c].page_title,
         backgroundColor:'#fff',
         url: config_list[c].url
    });
    //wins[c] = createRssTable(config_list[c]['feed_url']);
    tabs[c] = Titanium.UI.createTab({  
        icon:'KS_nav_views.png',
        title:config_list[c].tab_title,
        window:wins[c]
    });
    tabGroup.addTab(tabs[c]);
}

tabGroup.addEventListener('open',function()
{
	// set background color back to white after tab group transition
	Titanium.UI.setBackgroundColor('#fff');
});

// open tab group
tabGroup.setActiveTab(1); 
// open tab group with a transition animation
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});
