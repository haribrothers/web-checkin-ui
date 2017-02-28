"use strict";
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log("Electron launching with NODE_ENV: " + process.env.NODE_ENV);
var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var shell = electron.shell;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var template;
var menu;
var index_1 = require("./app/shared/electron/index");
if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 900, height: 620 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.webContents.on('did-navigate-in-page', function (e, url) {
        console.log("Page navigated: " + url);
    });
    var appTitle = "Angular Seed Advanced";
    var langMenu = {
        label: 'Language',
        submenu: []
    };
    var _loop_1 = function () {
        var code = lang.code;
        var langOption = {
            label: lang.title,
            click: function () {
                console.log("Change lang: " + code);
                mainWindow.webContents.executeJavaScript("window.dispatchEvent(new CustomEvent('changeLang', {detail: { value: '" + code + "'} }));");
            }
        };
        langMenu.submenu.push(langOption);
    };
    for (var _i = 0, _a = index_1.DesktopConfig.SUPPORTED_LANGUAGES; _i < _a.length; _i++) {
        var lang = _a[_i];
        _loop_1();
    }
    var helpMenu = {
        label: 'Help',
        submenu: [{
                label: 'Learn More',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced');
                }
            }, {
                label: 'Issues',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced/issues');
                }
            }, {
                label: "My Amazing Parent: Minko Gechev's Angular Seed",
                click: function () {
                    shell.openExternal('https://github.com/mgechev/angular-seed');
                }
            }, {
                label: 'Angular 2',
                click: function () {
                    shell.openExternal('https://angular.io/');
                }
            }, {
                label: 'Electron',
                click: function () {
                    shell.openExternal('http://electron.atom.io/');
                }
            }, {
                label: 'Electron Docs',
                click: function () {
                    shell.openExternal('https://github.com/atom/electron/tree/master/docs');
                }
            }, {
                label: 'Codeology Visualization',
                click: function () {
                    shell.openExternal('http://codeology.braintreepayments.com/nathanwalker/angular-seed-advanced');
                }
            }]
    };
    if (process.platform === 'darwin') {
        template = [{
                label: appTitle,
                submenu: [{
                        label: "About " + appTitle,
                        selector: 'orderFrontStandardAboutPanel:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Services',
                        submenu: []
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Hide Angular Seed Advanced',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    }, {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    }, {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
                    }]
            }, {
                label: 'Edit',
                submenu: [{
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    }, {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    }, {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    }, {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    }, {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }]
            }, {
                label: 'View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: 'Reload',
                        accelerator: 'Command+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Alt+Command+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            }, {
                label: 'Window',
                submenu: [{
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    }, {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
    else {
        template = [{
                label: '&File',
                submenu: [{
                        label: '&Open',
                        accelerator: 'Ctrl+O'
                    }, {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: function () {
                            mainWindow.close();
                        }
                    }]
            }, {
                label: '&View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: '&Reload',
                        accelerator: 'Ctrl+R',
                        click: function () {
                            mainWindow.restart();
                        }
                    }, {
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUM5QixDQUFDO3FCQUNGLENBQUMsR0FBRyxDQUFDO3dCQUNKLEtBQUssRUFBRSxxQkFBcUI7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxDQUFDO3FCQUNGLENBQUM7YUFDTDtZQUNELFFBQVE7WUFDUixRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0FBRUgsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5kZXNrdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsicHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbic7XG5jb25zb2xlLmxvZyhgRWxlY3Ryb24gbGF1bmNoaW5nIHdpdGggTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YCk7XG5cbi8vIGVsZWN0cm9uXG5jb25zdCBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG5jb25zdCBhcHAgPSBlbGVjdHJvbi5hcHA7XG5jb25zdCBNZW51OiBhbnkgPSBlbGVjdHJvbi5NZW51O1xuY29uc3Qgc2hlbGw6IGFueSA9IGVsZWN0cm9uLnNoZWxsO1xuLy8gY29uc3Qge2NyYXNoUmVwb3J0ZXJ9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbmNvbnN0IEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbi5Ccm93c2VyV2luZG93O1xubGV0IG1haW5XaW5kb3c6IGFueSA9IG51bGw7XG5sZXQgdGVtcGxhdGU6IGFueTtcbmxldCBtZW51OiBhbnk7XG5cbi8vIGFwcFxuaW1wb3J0IHsgRGVza3RvcENvbmZpZyB9IGZyb20gJy4vYXBwL3NoYXJlZC9lbGVjdHJvbi9pbmRleCc7XG5cbi8vIFNhbXBsZVxuLy8gWW91IHdvdWxkIG5lZWQgYSB2YWxpZCBgc3VibWl0VVJMYCB0byB1c2Vcbi8vIGNyYXNoUmVwb3J0ZXIuc3RhcnQoe1xuLy8gICBwcm9kdWN0TmFtZTogJ0FuZ3VsYXJTZWVkQWR2YW5jZWQnLFxuLy8gICBjb21wYW55TmFtZTogJ05hdGhhbldhbGtlcicsXG4vLyAgIHN1Ym1pdFVSTDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkJyxcbi8vICAgYXV0b1N1Ym1pdDogdHJ1ZVxuLy8gfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICByZXF1aXJlKCdlbGVjdHJvbi1kZWJ1ZycpKCk7XG59XG5cbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJykge1xuICAgIGFwcC5xdWl0KCk7XG4gIH1cbn0pO1xuXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIHdpbmRvdyB0byBvdXIgc3BlY2lmaWVkIGRpbWVuc2lvbnNcbiAgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHsgd2lkdGg6IDkwMCwgaGVpZ2h0OiA2MjAgfSk7XG5cbiAgLy8gVGVsbCBFbGVjdHJvbiB3aGVyZSB0byBsb2FkIHRoZSBlbnRyeSBwb2ludCBmcm9tXG4gIG1haW5XaW5kb3cubG9hZFVSTCgnZmlsZTovLycgKyBfX2Rpcm5hbWUgKyAnL2luZGV4Lmh0bWwnKTtcblxuICAvLyBDbGVhciBvdXQgdGhlIG1haW4gd2luZG93IHdoZW4gdGhlIGFwcCBpcyBjbG9zZWRcbiAgbWFpbldpbmRvdy5vbignY2xvc2VkJywgKCkgPT4ge1xuICAgIG1haW5XaW5kb3cgPSBudWxsO1xuICB9KTtcblxuICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9uKCdkaWQtbmF2aWdhdGUtaW4tcGFnZScsIChlOiBhbnksIHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFBhZ2UgbmF2aWdhdGVkOiAke3VybH1gKTtcbiAgfSk7XG5cbiAgbGV0IGFwcFRpdGxlOiBzdHJpbmcgPSBgQW5ndWxhciBTZWVkIEFkdmFuY2VkYDtcblxuICBsZXQgbGFuZ01lbnU6IGFueSA9IHtcbiAgICBsYWJlbDogJ0xhbmd1YWdlJyxcbiAgICBzdWJtZW51OiBbXVxuICB9O1xuICBmb3IgKHZhciBsYW5nIG9mIERlc2t0b3BDb25maWcuU1VQUE9SVEVEX0xBTkdVQUdFUykge1xuICAgIGxldCBjb2RlID0gbGFuZy5jb2RlO1xuICAgIGxldCBsYW5nT3B0aW9uID0ge1xuICAgICAgbGFiZWw6IGxhbmcudGl0bGUsXG4gICAgICBjbGljazooKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDaGFuZ2UgbGFuZzogJHtjb2RlfWApO1xuICAgICAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KGB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUxhbmcnLCB7ZGV0YWlsOiB7IHZhbHVlOiAnJHtjb2RlfSd9IH0pKTtgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGxhbmdNZW51LnN1Ym1lbnUucHVzaChsYW5nT3B0aW9uKTtcbiAgfVxuXG4gIGxldCBoZWxwTWVudTogYW55ID0ge1xuICAgIGxhYmVsOiAnSGVscCcsXG4gICAgc3VibWVudTogW3tcbiAgICAgIGxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgICBjbGljazooKSA9PiB7XG4gICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL05hdGhhbldhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnSXNzdWVzJyxcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL05hdGhhbldhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQvaXNzdWVzJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IGBNeSBBbWF6aW5nIFBhcmVudDogTWlua28gR2VjaGV2J3MgQW5ndWxhciBTZWVkYCxcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvYW5ndWxhci1zZWVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdBbmd1bGFyIDInLFxuICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2FuZ3VsYXIuaW8vJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdFbGVjdHJvbicsXG4gICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHA6Ly9lbGVjdHJvbi5hdG9tLmlvLycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnRWxlY3Ryb24gRG9jcycsXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vYXRvbS9lbGVjdHJvbi90cmVlL21hc3Rlci9kb2NzJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdDb2Rlb2xvZ3kgVmlzdWFsaXphdGlvbicsXG4gICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHA6Ly9jb2Rlb2xvZ3kuYnJhaW50cmVlcGF5bWVudHMuY29tL25hdGhhbndhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQnKTtcbiAgICAgICAgfVxuICAgICAgfV1cbiAgfTtcblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcbiAgICB0ZW1wbGF0ZSA9IFt7XG4gICAgICBsYWJlbDogYXBwVGl0bGUsXG4gICAgICBzdWJtZW51OiBbe1xuICAgICAgICBsYWJlbDogYEFib3V0ICR7YXBwVGl0bGV9YCxcbiAgICAgICAgc2VsZWN0b3I6ICdvcmRlckZyb250U3RhbmRhcmRBYm91dFBhbmVsOidcbiAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICdTZXJ2aWNlcycsXG4gICAgICAgICAgc3VibWVudTogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBsYWJlbDogJ0hpZGUgQW5ndWxhciBTZWVkIEFkdmFuY2VkJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrSCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICdoaWRlOidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnSGlkZSBPdGhlcnMnLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtTaGlmdCtIJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ2hpZGVPdGhlckFwcGxpY2F0aW9uczonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBsYWJlbDogJ1Nob3cgQWxsJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ3VuaGlkZUFsbEFwcGxpY2F0aW9uczonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICdRdWl0JyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrUScsXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgYXBwLnF1aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1dXG4gICAgfSwge1xuICAgICAgICBsYWJlbDogJ0VkaXQnLFxuICAgICAgICBzdWJtZW51OiBbe1xuICAgICAgICAgIGxhYmVsOiAnVW5kbycsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1onLFxuICAgICAgICAgIHNlbGVjdG9yOiAndW5kbzonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmVkbycsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ1NoaWZ0K0NvbW1hbmQrWicsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3JlZG86J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdDdXQnLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1gnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdjdXQ6J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29weScsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQycsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2NvcHk6J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUGFzdGUnLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1YnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwYXN0ZTonXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3QgQWxsJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtBJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0QWxsOidcbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ1ZpZXcnLFxuICAgICAgICBzdWJtZW51OiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gW3tcbiAgICAgICAgICBsYWJlbDogJ1JlbG9hZCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1InLFxuICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgIG1haW5XaW5kb3cucmVzdGFydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK0NvbW1hbmQrRicsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRGV2ZWxvcGVyIFRvb2xzJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQWx0K0NvbW1hbmQrSScsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSA6IFt7XG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSBGdWxsIFNjcmVlbicsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrQ29tbWFuZCtGJyxcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKCFtYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ1dpbmRvdycsXG4gICAgICAgIHN1Ym1lbnU6IFt7XG4gICAgICAgICAgbGFiZWw6ICdNaW5pbWl6ZScsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK00nLFxuICAgICAgICAgIHNlbGVjdG9yOiAncGVyZm9ybU1pbmlhdHVyaXplOidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrVycsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BlcmZvcm1DbG9zZTonXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ0JyaW5nIEFsbCB0byBGcm9udCcsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FycmFuZ2VJbkZyb250OidcbiAgICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIGxhbmdNZW51LFxuICAgICAgaGVscE1lbnVdO1xuXG4gICAgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xuICB9IGVsc2Uge1xuICAgIHRlbXBsYXRlID0gW3tcbiAgICAgIGxhYmVsOiAnJkZpbGUnLFxuICAgICAgc3VibWVudTogW3tcbiAgICAgICAgbGFiZWw6ICcmT3BlbicsXG4gICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtPJ1xuICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnJkNsb3NlJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrVycsXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgbWFpbldpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnJlZpZXcnLFxuICAgICAgICBzdWJtZW51OiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gW3tcbiAgICAgICAgICBsYWJlbDogJyZSZWxvYWQnLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtSJyxcbiAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICBtYWluV2luZG93LnJlc3RhcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlICZGdWxsIFNjcmVlbicsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMScsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkRldmVsb3BlciBUb29scycsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0FsdCtDdHJsK0knLFxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfV0gOiBbe1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkZ1bGwgU2NyZWVuJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnRjExJyxcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKCFtYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIGxhbmdNZW51LFxuICAgICAgaGVscE1lbnVdO1xuICAgIG1lbnUgPSBNZW51LmJ1aWxkRnJvbVRlbXBsYXRlKHRlbXBsYXRlKTtcbiAgICBtYWluV2luZG93LnNldE1lbnUobWVudSk7XG4gIH1cblxufSk7XG4iXX0=
