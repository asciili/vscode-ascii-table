import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let items: vscode.QuickPickItem[] = [
		{ label: "NUL",  description: "0x0", detail: "null" },
		{ label: "SOH",  description: "0x1", detail: "start of headline" },
		{ label: "STX",  description: "0x2", detail: "start of text" },
		{ label: "ETX",  description: "0x3", detail: "end of text" },
		{ label: "EOT",  description: "0x4", detail: "end of transmission" },
		{ label: "ENQ",  description: "0x5", detail: "enquiry" },
		{ label: "ACK",  description: "0x6", detail: "acknowledge" },
		{ label: "BEL",  description: "0x7", detail: "bell" },
		{ label: "BS",   description: "0x8", detail: "backspace" },
		{ label: "HT",   description: "0x9", detail: "horizontal tab" },
		{ label: "LF",   description: "0xA", detail: "NL line feed, new line" },
		{ label: "VT",   description: "0xB", detail: "vertical tab" },
		{ label: "FF",   description: "0xC", detail: "NP form feed, new page" },
		{ label: "CR",   description: "0xD", detail: "carriage return" },
		{ label: "SO",   description: "0xE", detail: "shift out" },
		{ label: "SI",   description: "0xF", detail: "shift in" },
		{ label: "DLE",  description: "0x10", detail: "data link escape" },
		{ label: "DC1",  description: "0x11", detail: "device control 1" },
		{ label: "DC2",  description: "0x12", detail: "device control 2" },
		{ label: "DC3",  description: "0x13", detail: "device control 3" },
		{ label: "DC4",  description: "0x14", detail: "device control 4" },
		{ label: "NAK",  description: "0x15", detail: "negative acknowledge" },
		{ label: "SYN",  description: "0x16", detail: "synchronous idle" },
		{ label: "ETB",  description: "0x17", detail: "end of trans. block" },
		{ label: "CAN",  description: "0x18", detail: "cancel" },
		{ label: "EM",   description: "0x19", detail: "end of medium" },
		{ label: "SUB",  description: "0x1A", detail: "substitute" },
		{ label: "ESC",  description: "0x1B", detail: "escape" },
		{ label: "FS",   description: "0x1C", detail: "file separator" },
		{ label: "GS",   description: "0x1D", detail: "group separator" },
		{ label: "RS",   description: "0x1E", detail: "record separator" },
		{ label: "US",   description: "0x1F", detail: "unit separator" },
		{ label: " ",    description: "0x20", detail: "space" },
		{ label: "!",    description: "0x21" },
		{ label: "\"",   description: "0x22" },
		{ label: "#",    description: "0x23" },
		{ label: "$",    description: "0x24" },
		{ label: "%",    description: "0x25" },
		{ label: "&",    description: "0x26" },
		{ label: "'",    description: "0x27" },
		{ label: "(",    description: "0x28" },
		{ label: ")",    description: "0x29" },
		{ label: "*",    description: "0x2A" },
		{ label: "+",    description: "0x2B" },
		{ label: ",",    description: "0x2C" },
		{ label: "-",    description: "0x2D" },
		{ label: ".",    description: "0x2E" },
		{ label: "/",    description: "0x2F" },
		{ label: "0",    description: "0x30" },
		{ label: "1",    description: "0x31" },
		{ label: "2",    description: "0x32" },
		{ label: "3",    description: "0x33" },
		{ label: "4",    description: "0x34" },
		{ label: "5",    description: "0x35" },
		{ label: "6",    description: "0x36" },
		{ label: "7",    description: "0x37" },
		{ label: "8",    description: "0x38" },
		{ label: "9",    description: "0x39" },
		{ label: ":",    description: "0x3A" },
		{ label: ";",    description: "0x3B" },
		{ label: "<",    description: "0x3C" },
		{ label: "=",    description: "0x3D" },
		{ label: ">",    description: "0x3E" },
		{ label: "?",    description: "0x3F" },
		{ label: "@",    description: "0x40" },
		{ label: "A",    description: "0x41" },
		{ label: "B",    description: "0x42" },
		{ label: "C",    description: "0x43" },
		{ label: "D",    description: "0x44" },
		{ label: "E",    description: "0x45" },
		{ label: "F",    description: "0x46" },
		{ label: "G",    description: "0x47" },
		{ label: "H",    description: "0x48" },
		{ label: "I",    description: "0x49" },
		{ label: "J",    description: "0x4A" },
		{ label: "K",    description: "0x4B" },
		{ label: "L",    description: "0x4C" },
		{ label: "M",    description: "0x4D" },
		{ label: "N",    description: "0x4E" },
		{ label: "O",    description: "0x4F" },
		{ label: "P",    description: "0x50" },
		{ label: "Q",    description: "0x51" },
		{ label: "R",    description: "0x52" },
		{ label: "S",    description: "0x53" },
		{ label: "T",    description: "0x54" },
		{ label: "U",    description: "0x55" },
		{ label: "V",    description: "0x56" },
		{ label: "W",    description: "0x57" },
		{ label: "X",    description: "0x58" },
		{ label: "Y",    description: "0x59" },
		{ label: "Z",    description: "0x5A" },
		{ label: "[",    description: "0x5B" },
		{ label: "\\",   description: "0x5C" },
		{ label: "]",    description: "0x5D" },
		{ label: "^",    description: "0x5E" },
		{ label: "_",    description: "0x5F" },
		{ label: "`",    description: "0x60" },
		{ label: "a",    description: "0x61" },
		{ label: "b",    description: "0x62" },
		{ label: "c",    description: "0x63" },
		{ label: "d",    description: "0x64" },
		{ label: "e",    description: "0x65" },
		{ label: "f",    description: "0x66" },
		{ label: "g",    description: "0x67" },
		{ label: "h",    description: "0x68" },
		{ label: "i",    description: "0x69" },
		{ label: "j",    description: "0x6A" },
		{ label: "k",    description: "0x6B" },
		{ label: "l",    description: "0x6C" },
		{ label: "m",    description: "0x6D" },
		{ label: "n",    description: "0x6E" },
		{ label: "o",    description: "0x6F" },
		{ label: "p",    description: "0x70" },
		{ label: "q",    description: "0x71" },
		{ label: "r",    description: "0x72" },
		{ label: "s",    description: "0x73" },
		{ label: "t",    description: "0x74" },
		{ label: "u",    description: "0x75" },
		{ label: "v",    description: "0x76" },
		{ label: "w",    description: "0x77" },
		{ label: "x",    description: "0x78" },
		{ label: "y",    description: "0x79" },
		{ label: "z",    description: "0x7A" },
		{ label: "{",    description: "0x7B" },
		{ label: "|",    description: "0x7C" },
		{ label: "}",    description: "0x7D" },
		{ label: "~",    description: "0x7E" },
		{ label: "DEL" , description: "0x7F", detail: "delete" }];
	let allDisposable  = vscode.commands.registerCommand('extension.allChars', () => {
		vscode.window. showQuickPick(items);
	}); 
 
	let printableItems : vscode.QuickPickItem[] = [
		{ label: "           !        \"         #       $        %      &       '", detail: "32 　 33 　 34 　 35 　 36 　 37 　 38 　 39" },
		{ label: "(          )        *        +        ,        -        .         /", detail: "40 　 41 　 42 　 43 　 44 　 45 　 46 　 47" },
		{ label: "0         1       2        3        4        5       6        7       8        9", detail: "48 　 49 　 50 　 51 　 52 　 53 　 54 　 55 　 56 　 57" },
		{ label: ":         ;         <       =       >       ?        @", detail: "58 　 59 　 60 　 61 　 62 　 63 　 64" },
		{ label: "A        B       C       D       E        F        G", detail: "65 　 66 　 67 　 68 　 69 　 70 　 71" },
		{ label: "H       I         J        K        L       M       N", detail: "72 　 73 　 74 　 75 　 76 　 77 　 78" },
		{ label: "O       P        Q      R        S        T", detail: "79 　 80 　 81 　 82 　 83 　 84" },
		{ label: "U        V       W      X       Y        Z", detail: "85 　 86 　 87 　 88 　 89 　 90" },
		{ label: "[         \\        ]        ^        _        `", detail: "91 　 92 　 93 　 94 　 95 　 96" },
		{ label: "a        b       c        d        e       f         g", detail: "97 　 98 　 99 　 100　101　102　103" },
		{ label: "h        i         j        k        l         m      n", detail: "104　105　106　107　108　109　110" },
		{ label: "o        p       q        r        s        t", detail: "111　112　113　114　115　116" },
		{ label: "u        v        w       x        y        z", detail: "117　118　119　120　121　122" },
		{ label: "{         |         }        ~", detail: "123　124　125　126" }];
	let printableDisposable = vscode.commands.registerCommand('extension.printableChars', () => {
		vscode.window.showQuickPick(printableItems);
	});

	context.subscriptions.push(allDisposable);
	context.subscriptions.push(printableDisposable);
}

export function deactivate() { }
