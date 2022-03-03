import { LambdaLog } from 'lambda-log'

const log = (): LambdaLog =>
    new LambdaLog({
        meta: {
            memorySize:
                process.env.AWS_LAMBDA_FUNCTION_MEMORY_SIZE ||
                'AWS_LAMBDA_FUNCTION_MEMORY_SIZE',
            region: process.env.AWS_REGION || 'AWS_REGION',
            runtime: process.env.AWS_EXECUTION_ENV || 'AWS_EXECUTION_ENV',
            version:
                process.env.AWS_LAMBDA_FUNCTION_VERSION ||
                'AWS_LAMBDA_FUNCTION_VERSION',
        },
        dynamicMeta() {
            return {
                timestamp: new Date().toISOString(),
            }
        },
        silent: process.env.NODE_ENV === 'test',
        dev: process.env.NODE_ENV === 'development',
    })

export const logger = log()
