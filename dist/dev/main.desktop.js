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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUM5QixDQUFDO3FCQUNGLENBQUMsR0FBRyxDQUFDO3dCQUNKLEtBQUssRUFBRSxxQkFBcUI7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxDQUFDO3FCQUNGLENBQUM7YUFDTDtZQUNELFFBQVE7WUFDUixRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0FBRUgsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5kZXNrdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsicHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbic7XHJcbmNvbnNvbGUubG9nKGBFbGVjdHJvbiBsYXVuY2hpbmcgd2l0aCBOT0RFX0VOVjogJHtwcm9jZXNzLmVudi5OT0RFX0VOVn1gKTtcclxuXHJcbi8vIGVsZWN0cm9uXHJcbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcclxuY29uc3QgYXBwID0gZWxlY3Ryb24uYXBwO1xyXG5jb25zdCBNZW51OiBhbnkgPSBlbGVjdHJvbi5NZW51O1xyXG5jb25zdCBzaGVsbDogYW55ID0gZWxlY3Ryb24uc2hlbGw7XHJcbi8vIGNvbnN0IHtjcmFzaFJlcG9ydGVyfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XHJcbmNvbnN0IEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbi5Ccm93c2VyV2luZG93O1xyXG5sZXQgbWFpbldpbmRvdzogYW55ID0gbnVsbDtcclxubGV0IHRlbXBsYXRlOiBhbnk7XHJcbmxldCBtZW51OiBhbnk7XHJcblxyXG4vLyBhcHBcclxuaW1wb3J0IHsgRGVza3RvcENvbmZpZyB9IGZyb20gJy4vYXBwL3NoYXJlZC9lbGVjdHJvbi9pbmRleCc7XHJcblxyXG4vLyBTYW1wbGVcclxuLy8gWW91IHdvdWxkIG5lZWQgYSB2YWxpZCBgc3VibWl0VVJMYCB0byB1c2VcclxuLy8gY3Jhc2hSZXBvcnRlci5zdGFydCh7XHJcbi8vICAgcHJvZHVjdE5hbWU6ICdBbmd1bGFyU2VlZEFkdmFuY2VkJyxcclxuLy8gICBjb21wYW55TmFtZTogJ05hdGhhbldhbGtlcicsXHJcbi8vICAgc3VibWl0VVJMOiAnaHR0cHM6Ly9naXRodWIuY29tL05hdGhhbldhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQnLFxyXG4vLyAgIGF1dG9TdWJtaXQ6IHRydWVcclxuLy8gfSk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICByZXF1aXJlKCdlbGVjdHJvbi1kZWJ1ZycpKCk7XHJcbn1cclxuXHJcbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gIT09ICdkYXJ3aW4nKSB7XHJcbiAgICBhcHAucXVpdCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5hcHAub24oJ3JlYWR5JywgKCkgPT4ge1xyXG5cclxuICAvLyBJbml0aWFsaXplIHRoZSB3aW5kb3cgdG8gb3VyIHNwZWNpZmllZCBkaW1lbnNpb25zXHJcbiAgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHsgd2lkdGg6IDkwMCwgaGVpZ2h0OiA2MjAgfSk7XHJcblxyXG4gIC8vIFRlbGwgRWxlY3Ryb24gd2hlcmUgdG8gbG9hZCB0aGUgZW50cnkgcG9pbnQgZnJvbVxyXG4gIG1haW5XaW5kb3cubG9hZFVSTCgnZmlsZTovLycgKyBfX2Rpcm5hbWUgKyAnL2luZGV4Lmh0bWwnKTtcclxuXHJcbiAgLy8gQ2xlYXIgb3V0IHRoZSBtYWluIHdpbmRvdyB3aGVuIHRoZSBhcHAgaXMgY2xvc2VkXHJcbiAgbWFpbldpbmRvdy5vbignY2xvc2VkJywgKCkgPT4ge1xyXG4gICAgbWFpbldpbmRvdyA9IG51bGw7XHJcbiAgfSk7XHJcblxyXG4gIG1haW5XaW5kb3cud2ViQ29udGVudHMub24oJ2RpZC1uYXZpZ2F0ZS1pbi1wYWdlJywgKGU6IGFueSwgdXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBQYWdlIG5hdmlnYXRlZDogJHt1cmx9YCk7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBhcHBUaXRsZTogc3RyaW5nID0gYEFuZ3VsYXIgU2VlZCBBZHZhbmNlZGA7XHJcblxyXG4gIGxldCBsYW5nTWVudTogYW55ID0ge1xyXG4gICAgbGFiZWw6ICdMYW5ndWFnZScsXHJcbiAgICBzdWJtZW51OiBbXVxyXG4gIH07XHJcbiAgZm9yICh2YXIgbGFuZyBvZiBEZXNrdG9wQ29uZmlnLlNVUFBPUlRFRF9MQU5HVUFHRVMpIHtcclxuICAgIGxldCBjb2RlID0gbGFuZy5jb2RlO1xyXG4gICAgbGV0IGxhbmdPcHRpb24gPSB7XHJcbiAgICAgIGxhYmVsOiBsYW5nLnRpdGxlLFxyXG4gICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYENoYW5nZSBsYW5nOiAke2NvZGV9YCk7XHJcbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VMYW5nJywge2RldGFpbDogeyB2YWx1ZTogJyR7Y29kZX0nfSB9KSk7YCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBsYW5nTWVudS5zdWJtZW51LnB1c2gobGFuZ09wdGlvbik7XHJcbiAgfVxyXG5cclxuICBsZXQgaGVscE1lbnU6IGFueSA9IHtcclxuICAgIGxhYmVsOiAnSGVscCcsXHJcbiAgICBzdWJtZW51OiBbe1xyXG4gICAgICBsYWJlbDogJ0xlYXJuIE1vcmUnLFxyXG4gICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwczovL2dpdGh1Yi5jb20vTmF0aGFuV2Fsa2VyL2FuZ3VsYXItc2VlZC1hZHZhbmNlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6ICdJc3N1ZXMnLFxyXG4gICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL05hdGhhbldhbGtlci9hbmd1bGFyLXNlZWQtYWR2YW5jZWQvaXNzdWVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgbGFiZWw6IGBNeSBBbWF6aW5nIFBhcmVudDogTWlua28gR2VjaGV2J3MgQW5ndWxhciBTZWVkYCxcclxuICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2FuZ3VsYXItc2VlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnQW5ndWxhciAyJyxcclxuICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vYW5ndWxhci5pby8nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ0VsZWN0cm9uJyxcclxuICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHA6Ly9lbGVjdHJvbi5hdG9tLmlvLycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnRWxlY3Ryb24gRG9jcycsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL2F0b20vZWxlY3Ryb24vdHJlZS9tYXN0ZXIvZG9jcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnQ29kZW9sb2d5IFZpc3VhbGl6YXRpb24nLFxyXG4gICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cDovL2NvZGVvbG9neS5icmFpbnRyZWVwYXltZW50cy5jb20vbmF0aGFud2Fsa2VyL2FuZ3VsYXItc2VlZC1hZHZhbmNlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfV1cclxuICB9O1xyXG5cclxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcclxuICAgIHRlbXBsYXRlID0gW3tcclxuICAgICAgbGFiZWw6IGFwcFRpdGxlLFxyXG4gICAgICBzdWJtZW51OiBbe1xyXG4gICAgICAgIGxhYmVsOiBgQWJvdXQgJHthcHBUaXRsZX1gLFxyXG4gICAgICAgIHNlbGVjdG9yOiAnb3JkZXJGcm9udFN0YW5kYXJkQWJvdXRQYW5lbDonXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdTZXJ2aWNlcycsXHJcbiAgICAgICAgICBzdWJtZW51OiBbXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdIaWRlIEFuZ3VsYXIgU2VlZCBBZHZhbmNlZCcsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrSCcsXHJcbiAgICAgICAgICBzZWxlY3RvcjogJ2hpZGU6J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnSGlkZSBPdGhlcnMnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1NoaWZ0K0gnLFxyXG4gICAgICAgICAgc2VsZWN0b3I6ICdoaWRlT3RoZXJBcHBsaWNhdGlvbnM6J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGxhYmVsOiAnU2hvdyBBbGwnLFxyXG4gICAgICAgICAgc2VsZWN0b3I6ICd1bmhpZGVBbGxBcHBsaWNhdGlvbnM6J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIHR5cGU6ICdzZXBhcmF0b3InXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICdRdWl0JyxcclxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtRJyxcclxuICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgYXBwLnF1aXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICAgIGxhYmVsOiAnRWRpdCcsXHJcbiAgICAgICAgc3VibWVudTogW3tcclxuICAgICAgICAgIGxhYmVsOiAnVW5kbycsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrWicsXHJcbiAgICAgICAgICBzZWxlY3RvcjogJ3VuZG86J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdSZWRvJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdTaGlmdCtDb21tYW5kK1onLFxyXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3JlZG86J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0N1dCcsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtYJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdjdXQ6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0NvcHknLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQycsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnY29weTonXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUGFzdGUnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrVicsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFzdGU6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQScsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnc2VsZWN0QWxsOidcclxuICAgICAgICAgIH1dXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ1ZpZXcnLFxyXG4gICAgICAgIHN1Ym1lbnU6IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgPyBbe1xyXG4gICAgICAgICAgbGFiZWw6ICdSZWxvYWQnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1InLFxyXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICBtYWluV2luZG93LnJlc3RhcnQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIEZ1bGwgU2NyZWVuJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK0NvbW1hbmQrRicsXHJcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnVG9nZ2xlIERldmVsb3BlciBUb29scycsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQWx0K0NvbW1hbmQrSScsXHJcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnRvZ2dsZURldlRvb2xzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dIDogW3tcclxuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrQ29tbWFuZCtGJyxcclxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1dXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJ1dpbmRvdycsXHJcbiAgICAgICAgc3VibWVudTogW3tcclxuICAgICAgICAgIGxhYmVsOiAnTWluaW1pemUnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK00nLFxyXG4gICAgICAgICAgc2VsZWN0b3I6ICdwZXJmb3JtTWluaWF0dXJpemU6J1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtXJyxcclxuICAgICAgICAgICAgc2VsZWN0b3I6ICdwZXJmb3JtQ2xvc2U6J1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ0JyaW5nIEFsbCB0byBGcm9udCcsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnYXJyYW5nZUluRnJvbnQ6J1xyXG4gICAgICAgICAgfV1cclxuICAgICAgfSxcclxuICAgICAgbGFuZ01lbnUsXHJcbiAgICAgIGhlbHBNZW51XTtcclxuXHJcbiAgICBtZW51ID0gTWVudS5idWlsZEZyb21UZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcbiAgICBNZW51LnNldEFwcGxpY2F0aW9uTWVudShtZW51KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcGxhdGUgPSBbe1xyXG4gICAgICBsYWJlbDogJyZGaWxlJyxcclxuICAgICAgc3VibWVudTogW3tcclxuICAgICAgICBsYWJlbDogJyZPcGVuJyxcclxuICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrTydcclxuICAgICAgfSwge1xyXG4gICAgICAgICAgbGFiZWw6ICcmQ2xvc2UnLFxyXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK1cnLFxyXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICBtYWluV2luZG93LmNsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH0sIHtcclxuICAgICAgICBsYWJlbDogJyZWaWV3JyxcclxuICAgICAgICBzdWJtZW51OiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gW3tcclxuICAgICAgICAgIGxhYmVsOiAnJlJlbG9hZCcsXHJcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrUicsXHJcbiAgICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICAgIG1haW5XaW5kb3cucmVzdGFydCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkZ1bGwgU2NyZWVuJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdGMTEnLFxyXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XHJcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKCFtYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRGV2ZWxvcGVyIFRvb2xzJyxcclxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdBbHQrQ3RybCtJJyxcclxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xyXG4gICAgICAgICAgICAgIG1haW5XaW5kb3cudG9nZ2xlRGV2VG9vbHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfV0gOiBbe1xyXG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRnVsbCBTY3JlZW4nLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0YxMScsXHJcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcclxuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XVxyXG4gICAgICB9LFxyXG4gICAgICBsYW5nTWVudSxcclxuICAgICAgaGVscE1lbnVdO1xyXG4gICAgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUodGVtcGxhdGUpO1xyXG4gICAgbWFpbldpbmRvdy5zZXRNZW51KG1lbnUpO1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iXX0=
