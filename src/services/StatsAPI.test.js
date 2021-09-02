import StatsAPI from "./StatsAPI";
import moment from 'moment';

const chatId = 1
const todayMoment = moment()
const weekBeforeMoment = todayMoment

test(`StatsAPI ${StatsAPI.fetchChatName.name}`, async () => {
    await expect(StatsAPI.fetchChatName(chatId))
        .resolves
        .toBeInstanceOf(String)
})

test(`StatsAPI ${StatsAPI.fetchMessagesByDates.name}`, async () => {
    await expect(StatsAPI.fetchMessagesByDates(chatId, weekBeforeMoment, todayMoment))
        .resolves
        .toBeInstanceOf(Array)
})

test(`StatsAPI ${StatsAPI.fetchUsersByDates.name}`, async () => {
    await expect(StatsAPI.fetchUsersByDates(chatId, weekBeforeMoment, todayMoment))
        .resolves
        .toBeInstanceOf(Array)
})

test(`StatsAPI ${StatsAPI.fetchPopularWords.name}`, async () => {
    await expect(StatsAPI.fetchPopularWords(chatId, weekBeforeMoment, todayMoment))
        .resolves
        .toBeInstanceOf(Array)
})

test(`StatsAPI ${StatsAPI.fetchMostActiveUsers.name}`, async () => {
    await expect(StatsAPI.fetchMostActiveUsers(chatId, weekBeforeMoment, todayMoment))
        .resolves
        .toBeInstanceOf(Array)
})
