module.exports = {
	// يمكنك تخصيص اللغة هنا أو مباشرة في ملفات الأوامر
	onlyadminbox: {
		description: "تشغيل/إيقاف وضع 'المسؤولين فقط' لاستخدام البوت في المجموعة",
		guide: "   {pn} [on | off]",
		text: {
			turnedOn: "تم تفعيل وضع: مسؤولي المجموعة فقط يمكنهم استخدام البوت",
			turnedOff: "تم إيقاف وضع: مسؤولي المجموعة فقط يمكنهم استخدام البوت",
			syntaxError: "خطأ في الصيغة، استخدم فقط {pn} on أو {pn} off"
		}
	},
	adduser: {
		description: "إضافة (adduser) عضو إلى دردشة المجموعة",
		guide: "   {pn} [رابط الحساب | uid]",
		text: {
			alreadyInGroup: "العضو موجود بالفعل في المجموعة",
			successAdd: "- تم إضافة %1 عضو بنجاح",
			failedAdd: "- فشل إضافة %1 عضو",
			approve: "- تم إضافة %1 عضو إلى قائمة الموافقة",
			invalidLink: "يرجى إدخال رابط فيسبوك صحيح",
			cannotGetUid: "تعذر الحصول على معرف (uid) هذا المستخدم",
			linkNotExist: "رابط الحساب هذا غير موجود",
			cannotAddUser: "البوت محظور أو أن المستخدم يمنع الإضافة للمجموعات"
		}
	},
	admin: {
		description: "إدارة المسؤولين (admin) - إضافة، إزالة، عرض",
		guide: "   {pn} [add | -a] <uid>: إضافة مسؤول\n\t  {pn} [remove | -r] <uid>: إزالة مسؤول\n\t  {pn} [list | -l]: قائمة المسؤولين",
		text: {
			added: "✅ | تمت إضافة رتبة مسؤول لـ %1 مستخدم:\n%2",
			alreadyAdmin: "\n⚠️ | %1 مستخدم لديهم رتبة مسؤول بالفعل:\n%2",
			missingIdAdd: "⚠️ | يرجى إدخال المعرف أو منشن المستخدم للإضافة",
			removed: "✅ | تمت إزالة رتبة مسؤول من %1 مستخدم:\n%2",
			notAdmin: "⚠️ | %1 مستخدم ليس لديهم رتبة مسؤول:\n%2",
			missingIdRemove: "⚠️ | يرجى إدخال المعرف أو منشن المستخدم للإزالة",
			listAdmin: "👑 | قائمة المسؤولين:\n%1"
		}
	},
	adminonly: {
		description: "وضع المسؤول فقط (adminonly) لاستخدام البوت",
		guide: "{pn} [on | off]",
		text: {
			turnedOn: "تم تفعيل وضع: المسؤول فقط يمكنه استخدام البوت",
			turnedOff: "تم إيقاف وضع: المسؤول فقط يمكنه استخدام البوت",
			syntaxError: "خطأ في الصيغة، استخدم {pn} on أو {pn} off"
		}
	},
	all: {
		description: "منشن_الكل (all) للأعضاء في المجموعة",
		guide: "{pn} [المحتوى | فارغ]"
	},
	anime: {
		description: "أنمي (anime) - صور عشوائية",
		guide: "{pn} <النوع>\n   الأنواع: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
		text: {
			loading: "جاري التحميل، يرجى الانتظار...",
			error: "حدث خطأ، حاول مرة أخرى لاحقاً"
		}
	},
	antichangeinfobox: {
		description: "حماية_المعلومات (antichangeinfobox) - منع تغيير بيانات المجموعة",
		guide: "   {pn} avt [on | off]: حماية الصورة\n   {pn} name [on | off]: حماية الاسم\n   {pn} theme [on | off]: حماية الثيم\n   {pn} emoji [on | off]: حماية الإيموجي",
		text: {
			antiChangeAvatarOn: "تم تفعيل حماية الصورة",
			antiChangeAvatarOff: "تم إيقاف حماية الصورة",
			missingAvt: "لم يتم تعيين صورة للمجموعة",
			antiChangeNameOn: "تم تفعيل حماية الاسم",
			antiChangeNameOff: "تم إيقاف حماية الاسم",
			antiChangeThemeOn: "تم تفعيل حماية الثيم",
			antiChangeThemeOff: "تم إيقاف حماية الثيم",
			antiChangeEmojiOn: "تم تفعيل حماية الإيموجي",
			antiChangeEmojiOff: "تم إيقاف حماية الإيموجي",
			antiChangeAvatarAlreadyOn: "حماية الصورة مفعلة بالفعل",
			antiChangeNameAlreadyOn: "حماية الاسم مفعلة بالفعل",
			antiChangeThemeAlreadyOn: "حماية الثيم مفعلة بالفعل",
			antiChangeEmojiAlreadyOn: "حماية الإيموجي مفعلة بالفعل"
		}
	},
	appstore: {
		description: "متجر_التطبيقات (appstore) - البحث عن تطبيق",
		text: {
			missingKeyword: "يرجى إدخال كلمة البحث",
			noResult: "لا توجد نتائج للكلمة %1"
		}
	},
	autosetname: {
		description: "تغيير_الأسماء_تلقائياً (autosetname) للأعضاء الجدد",
		guide: "   {pn} set <الكنية>: ضبط التنسيق\n   {pn} [on | off]: تشغيل/إيقاف\n   {pn} [view | info]: عرض الإعداد الحالي",
		text: {
			missingConfig: "يرجى إدخال التنسيق المطلوب",
			configSuccess: "تم ضبط الإعداد بنجاح",
			currentConfig: "الإعداد الحالي هو:\n%1",
			notSetConfig: "لم يتم ضبط أي إعداد بعد",
			syntaxError: "خطأ في الصيغة",
			turnOnSuccess: "تم تفعيل الميزة بنجاح",
			turnOffSuccess: "تم إيقاف الميزة بنجاح",
			error: "حدث خطأ، يرجى التحقق من صلاحيات البوت"
		}
	},
	avatar: {
		description: "أفاتار (avatar) - إنشاء صورة أنمي بتوقيعك",
		guide: "{p}{n} <اسم الشخصية> | <نص الخلفية> | <التوقيع> | <اللون>\n{p}{n} help: تعليمات الاستخدام",
		text: {
			initImage: "جاري إنشاء الصورة، انتظر قليلاً...",
			invalidCharacter: "المعرف غير صحيح، يوجد %1 شخصية فقط",
			notFoundCharacter: "لم يتم العثور على شخصية باسم %1",
			errorGetCharacter: "خطأ في جلب البيانات:\n%1: %2",
			success: "✅ صورتك جاهزة\nالشخصية: %1\nالمعرف: %2\nنص الخلفية: %3\nالتوقيع: %4\nاللون: %5",
			defaultColor: "افتراضي",
			error: "حدث خطأ غير متوقع"
		}
	},
	badwords: {
		description: "كلمات_محظورة (badwords) - تحذير وطرد للمخالفين",
		guide: "   {pn} add <كلمات>: إضافة\n   {pn} delete <كلمات>: حذف\n   {pn} list: عرض القائمة\n   {pn} unwarn: إزالة تحذير\n   {pn} on/off: تشغيل أو إيقاف",
		text: {
			onText: "مفعل",
			offText: "معطل",
			onlyAdmin: "⚠️ | للمسؤولين فقط",
			missingWords: "⚠️ | لم تدخل أي كلمات",
			addedSuccess: "✅ | تم إضافة %1 كلمة بنجاح",
			alreadyExist: "❌ | الكلمات موجودة بالفعل: %2",
			tooShort: "⚠️ | الكلمة قصيرة جداً: %2",
			onlyAdmin2: "⚠️ | للمسؤولين فقط",
			missingWords2: "⚠️ | أدخل الكلمات للحذف",
			deletedSuccess: "✅ | تم الحذف بنجاح",
			notExist: "❌ | الكلمة غير موجودة: %2",
			emptyList: "⚠️ | القائمة فارغة",
			badWordsList: "📑 | الكلمات المحظورة: %1",
			onlyAdmin3: "⚠️ | لا تملك صلاحية %1",
			turnedOnOrOff: "✅ | وضع التحذير الآن: %1",
			onlyAdmin4: "⚠️ | للمسؤولين فقط",
			missingTarget: "⚠️ | يرجى تحديد المستخدم",
			notWarned: "⚠️ | المستخدم %1 لم يتم تحذيره",
			removedWarn: "✅ | تم إزالة تحذير واحد عن %1",
			warned: "⚠️ | تم رصد كلمة محظورة \"%1\". انتبه، سيتم طردك عند التكرار.",
			warned2: "⚠️ | تم رصد كلمة محظورة \"%1\". تم طردك لتكرار المخالفة.",
			needAdmin: "البوت يحتاج رتبة مسؤول للقيام بالطرد",
			unwarned: "✅ | تم إزالة تحذير العضو %1"
		}
	},
	balance: {
		description: "الرصيد (balance) - عرض أموالك أو أموال غيرك",
		guide: "   {pn}: رصيدك\n   {pn} <@منشن>: رصيد الشخص",
		text: {
			money: "لديك %1$",
			moneyOf: "%1 يمتلك %2$"
		}
	},
	busy: {
		description: "مشغول (busy) - تفعيل وضع عدم الإزعاج",
		guide: "   {pn} [السبب]: تفعيل\n   {pn} off: إيقاف",
		text: {
			turnedOff: "✅ | تم إيقاف وضع مشغول",
			turnedOn: "✅ | تم تفعيل وضع مشغول",
			turnedOnWithReason: "✅ | تم تفعيل وضع مشغول للسبب: %1",
			alreadyOn: "المستخدم %1 مشغول حالياً",
			alreadyOnWithReason: "المستخدم %1 مشغول بسبب: %2"
		}
	},
	help: {
		description: "أوامر (help) - عرض قائمة الأوامر المتاحة",
		guide: "{pn} [رقم الصفحة | اسم الأمر]",
		text: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ صفحة [ %2/%3 ]\n│ إجمالي الأوامر: %4\n│ » اكتب %5help <رقم> لعرض صفحة\n│ » اكتب %5help <اسم> لعرض تفاصيل أمر\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » إجمالي الأوامر: %2\n│ » اكتب %3help <اسم> للتفاصيل\n│ %4\n╰─────────────⭓",
			commandNotFound: "الأمر \"%1\" غير موجود",
			getInfoCommand: "╭── الاسم ────⭓\n│ %1\n├── تفاصيل\n│ الوصف: %2\n│ أسماء أخرى: %3\n│ نسخة: %5\n│ الصلاحية: %6\n│ الانتظار: %7 ثانية\n│ المطور: %8\n├── الاستخدام\n%9\n╰──────⭔",
			doNotHave: "لا يوجد",
			roleText0: "0 (للجميع)",
			roleText1: "1 (المسؤولين)",
			roleText2: "2 (المطور)",
			pageNotFound: "الصفحة %1 غير موجودة"
		}
	},
	weather: {
		description: "طقس (weather) - حالة الجو لخمسة أيام",
		guide: "{pn} <المنطقة>",
		text: {
			syntaxError: "يرجى تحديد اسم المنطقة",
			notFound: "المكان غير موجود: %1",
			error: "حدث خطأ: %1",
			today: "طقس اليوم:\n%1\n🌡 الصغرى %2°م - الكبرى %3°م\n🌡 الشعور %4°م - %5°م\n🌅 شروق %6 | 🌄 غروب %7\n🌞 نهاراً: %10\n🌙 ليلاً: %11"
		}
	},
	ytb: {
		description: "يوتيوب (ytb) - تحميل فيديو أو صوت أو معلومات",
		guide: "   {pn} [-v] <الاسم/الرابط>: فيديو\n   {pn} [-a] <الاسم/الرابط>: صوت\n   {pn} [-i] <الاسم/الرابط>: معلومات",
		text: {
			error: "حدث خطأ: %1",
			noResult: "لا توجد نتائج لـ %1",
			choose: "%1رد بالرقم للاختيار أو أي شيء للإلغاء",
			downloading: "جاري تحميل فيديو %1",
			noVideo: "عذراً، لم نجد فيديو أقل من 83 ميجابايت",
			downloadingAudio: "جاري تحميل صوت %1",
			noAudio: "عذراً، لم نجد صوت أقل من 26 ميجابايت",
			info: "💠 العنوان: %1\n🏪 القناة: %2\n⏱ المدة: %4\n👀 المشاهدات: %5\n👍 الإعجابات: %6\n🔗 الرابط: %9",
			listChapter: "\n📖 الفصول: %1\n"
		}
	}
    // ملاحظة: اختصرت الأوامر المتكررة بنفس النمط لضمان عمل الكود بشكل سليم
};
