// import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
// import { GraphQLError } from "graphql";

// @Catch(GraphQLError)
// export class RestApiErrorFilter implements ExceptionFilter {
//     catch(exception: GraphQLError, host: ArgumentsHost) {
//         const ctx      = host.switchToHttp();
//         const response = ctx.getResponse();
//         const status   = 200;
//         response
//             .status(status)                
//             .json(RestApiErrorFilter.getApolloServerFormatError(exception));
//     }
// }

// private static getApolloServerFormatError(: RestApiErrorFilter) {
//     return {}; // do your conversion here
// }
