async function sendLog(level: LogLevel, message: string, json?: any): Promise<any> {
    const body = { level, message, json };
    !environment.production ? console.log('LOG: ', body) : null;
    return environment.sidelog.apiEnabled ? fetch(environment.sidelog.url, {
        method: 'POST',
        headers: {
            clientId: environment.sidelog.clientId,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }) : null;
}

export const LOGGER = {
    info: async (message: string, json?: any): Promise<any> => sendLog('info', message, json)
}

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'trace';
