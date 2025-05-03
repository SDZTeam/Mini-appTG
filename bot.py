import asyncio
from aiogram import Bot, Dispatcher, types
from aiogram.enums import ParseMode
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.filters import CommandStart
from aiogram.client.default import DefaultBotProperties

# 🔑 Токен бота
BOT_TOKEN = "7454171539:AAFhClCRE0Jld9JKX_StcbCX9TzMnUD3yXM"

# 🌐 Ссылка на мини-приложение (Expo Web + tunnel)
WEBAPP_URL = "https://hcrrfys-anonymous-8081.exp.direct/"

# Создание бота с нужными настройками
bot = Bot(
    token=BOT_TOKEN,
    default=DefaultBotProperties(parse_mode=ParseMode.HTML)
)
dp = Dispatcher(storage=MemoryStorage())

@dp.message(CommandStart())
async def start_handler(message: types.Message):
    keyboard = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="Открыть мини-приложение", web_app=WebAppInfo(url=WEBAPP_URL))]
    ])

    # Сначала отправим приветствие
    await message.answer(
        "👋 Привет! Это мини-приложение.\n\n"
        "Нажми кнопку ниже, чтобы открыть его прямо внутри Telegram 👇",
        reply_markup=keyboard
    )

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
