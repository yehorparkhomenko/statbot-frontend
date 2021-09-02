import React, { useState, useEffect } from "react";

import {
	SERVER_ENDPOINT,
	STATS_ENDPOINT
} from "../constants/StatsAPI";


class StatsAPI {
    async fetchData(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw Error(`HTTP status ${response.status}`);
        }

        const data = await response.json();

        return data;
    }

    async fetchChatName(chatId) {
        const url = `${STATS_ENDPOINT}/chat_name?chat_id=${chatId}`;

        try {
            return await this.fetchData(url);
        } catch (e) {
            throw new Error(`StatsAPI ${this.fetchChatName.name} failed ${e.message}`); 
        }
 
    }

    // todo Разделить на разные api
    async fetchMessagesByDates(chatId, fromDate, toDate) {
        const url = `${STATS_ENDPOINT}/messages_by_dates?chat_id=${chatId}&startDate=${fromDate}&endDate=${toDate}`;

        try {
            return await this.fetchData(url);
        } catch (e) {
            throw new Error(`StatsAPI ${this.fetchMessagesByDates.name} failed ${e.message}`); 
        }
    }


    async fetchUsersByDates(chatId, fromDate, toDate) {
        const url = `${STATS_ENDPOINT}/users_by_dates?chat_id=${chatId}&startDate=${fromDate}&endDate=${toDate}`;

        try {
            return await this.fetchData(url);
        } catch (e) {
            throw new Error(`StatsAPI ${this.fetchUsersByDates.name} failed ${e.message}`); 
        }
    }

    async fetchPopularWords(chatId, fromDate, toDate) {
        const url = `${STATS_ENDPOINT}/popular_words?chat_id=${chatId}&startDate=${fromDate}&endDate=${toDate}`;

        try {
            return await this.fetchData(url);
        } catch (e) {
            throw new Error(`StatsAPI ${this.fetchPopularWords.name} failed ${e.message}`); 
        }
    }

    async fetchMostActiveUsers(chatId, fromDate, toDate) {
        const url = `${STATS_ENDPOINT}/most_active_users?chat_id=${chatId}&startDate=${fromDate}&endDate=${toDate}`;

        try {
            return await this.fetchData(url);
        } catch (e) {
            throw new Error(`StatsAPI ${this.fetchMostActiveUsers.name} failed ${e.message}`); 
        }
    }
}

export default new StatsAPI();
