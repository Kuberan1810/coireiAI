import React from 'react';
import { Link } from 'react-router-dom';

const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4997 4.4997 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.5045 4.5045 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4947 4.4947 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.402-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4997 4.4997 0 0 1 6.1802 2.1812zm-9.2882 4.2541l2.7582-1.5878 2.7582 1.5878v3.1756l-2.7582 1.5878-2.7582-1.5878z" />
  </svg>
);

const PerplexityIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.2 2v7.2L19.5 4l1.2 1.2-5.9 6.8H22v1.7h-7.2l5.9 6.8-1.2 1.2-6.3-5.2V22h-2.4v-7.2L4.5 20l-1.2-1.2 5.9-6.8H2v-1.7h7.2L3.3 3.5l1.2-1.2 6.3 5.2V2h2.4z" />
  </svg>
);

const GeminiIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
  </svg>
);

const ClaudeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.12026 13.9611L8.25114 11.6449L8.32031 11.443L8.25111 11.3314H8.04912L7.35796 11.2889L4.99751 11.2251L2.95063 11.1401L0.967603 11.0339L0.467864 10.9276L0 10.3114L0.047802 10.0032L0.467864 9.72169L1.06855 9.77489L2.39774 9.8652L4.39138 10.0032L5.83744 10.0883L7.98002 10.3114H8.32031L8.36811 10.1733L8.25114 10.0883L8.16077 10.0032L6.09803 8.60613L3.86509 7.12924L2.69556 6.27926L2.0629 5.84895L1.7439 5.44521L1.60571 4.5634L2.17989 3.9312L2.95073 3.9843L3.1474 4.03741L3.92893 4.63767L5.59829 5.92866L7.77809 7.53305L8.09708 7.79859L8.22468 7.70831L8.24063 7.64461L8.09701 7.40548L6.91144 5.2646L5.64612 3.08648L5.08263 2.18348L4.93376 1.64149C4.88061 1.41837 4.84338 1.23251 4.84338 1.00406L5.49732 0.116813L5.85874 0L6.73065 0.116906L7.09756 0.435586L7.63975 1.67344L8.51698 3.62311L9.87805 6.27401L10.2767 7.06019L10.4894 7.78802L10.5691 8.01115H10.7074V7.88365L10.819 6.39091L11.0264 4.55805L11.2284 2.1993L11.2975 1.53527L11.6271 0.738398L12.281 0.308086L12.7914 0.552469L13.2114 1.1527L13.153 1.54059L12.9031 3.16083L12.414 5.70019L12.095 7.40023H12.281L12.4937 7.1877L13.355 6.04554L14.801 4.23928L15.439 3.52214L16.1834 2.73061L16.6618 2.35341H17.5656L18.2302 3.34153L17.9325 4.36153L17.0021 5.54086L16.2312 6.53958L15.1254 8.02709L14.4342 9.21708L14.4981 9.3127L14.6629 9.2967L17.1616 8.76558L18.5119 8.5211L20.1228 8.24487L20.8512 8.5849L20.9309 8.93016L20.6438 9.63673L18.9214 10.0617L16.9011 10.4654L13.8919 11.1773L13.8547 11.2039L13.8972 11.2571L15.2529 11.3846L15.8324 11.4164H17.2519L19.8942 11.613L20.5853 12.0697L21 12.6277L20.9308 13.0526L19.8676 13.5945L18.4321 13.2545L15.0827 12.4576L13.9344 12.1707H13.7749V12.2664L14.7319 13.2014L16.4863 14.7844L18.682 16.8244L18.7937 17.3291L18.5119 17.7276L18.2142 17.6851L16.2843 16.2348L15.54 15.5813L13.8547 14.1629H13.743V14.3117L14.1311 14.8801L16.1833 17.9613L16.2896 18.9069L16.1408 19.215L15.6091 19.4009L15.0243 19.2947L13.8228 17.6107L12.5841 15.7141L11.5846 14.0142L11.4623 14.0833L10.8721 20.4316L10.5957 20.7556L9.95772 21L9.42609 20.5963L9.14429 19.9428L9.42609 18.6519L9.76638 16.9679L10.0428 15.6292L10.2926 13.9663L10.4415 13.4138L10.4309 13.3766L10.3086 13.3926L9.05394 15.1139L7.14534 17.6904L5.63542 19.3053L5.27395 19.4488L4.64662 19.1247L4.70502 18.5456L5.05601 18.0303L7.14534 15.3741L8.40533 13.7273L9.21883 12.7764L9.21339 12.6382H9.16559L3.61517 16.2401L2.62629 16.3676L2.20098 15.9691L2.25422 15.3157L2.45624 15.1032L4.1256 13.9557L4.12026 13.9611Z" fill="currentColor"/>
  </svg>
);

const CopilotIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.84939 0H12.9014L12.8745 0.027161C12.861 0.0407415 12.8475 0.0497952 12.8385 0.0633757C12.8206 0.081483 12.8026 0.104117 12.7846 0.122225L12.7487 0.158439C12.7307 0.181073 12.7083 0.203708 12.6903 0.226342C12.6813 0.235395 12.6723 0.248976 12.6634 0.25803L12.5825 0.366674C11.9941 1.20867 11.6123 2.50334 11.1721 4.00625L11.1362 4.133C11.1182 4.18732 11.1047 4.24165 11.0868 4.30049C11.0823 4.32313 11.0733 4.34124 11.0688 4.36387C11.0598 4.40008 11.0463 4.4363 11.0374 4.47704C11.0374 4.48157 11.0329 4.49062 11.0329 4.49515C10.0267 7.93102 8.82292 12.1591 8.46808 13.4085C8.20306 14.3501 7.34065 15.0065 6.37044 15.0065H2.65128C1.64064 15.0065 0.939924 14.7258 0.513209 14.1464C-0.654642 12.5574 0.427866 8.95861 1.21841 6.32852C2.49407 2.06876 4.01227 0 5.84939 0ZM17.3527 3.98814L16.6475 1.57987C16.378 0.647338 15.5156 0 14.5544 0H14.4466C13.7414 0 13.3147 0.393835 13.108 0.665445L13.0676 0.719767C12.9688 0.860099 12.8745 1.02307 12.7846 1.19508C12.7532 1.25393 12.7262 1.31278 12.6948 1.37616C12.6679 1.43953 12.6364 1.50291 12.6095 1.56629C12.2995 2.28153 12.0345 3.18237 11.7426 4.1828L11.7066 4.30955L11.6527 4.48609C11.6482 4.49515 11.6482 4.50873 11.6437 4.51778C11.518 4.95236 11.3787 5.41862 11.235 5.91657C11.6931 5.59064 12.2546 5.40052 12.8385 5.40052H18.2915C17.8513 5.0429 17.5189 4.554 17.3527 3.98814ZM21.7816 14.6715C22.5721 12.0414 23.6546 8.44255 22.4868 6.85363C22.0601 6.2742 21.3639 5.99353 20.3487 5.99353H16.5622C16.5442 5.99353 16.5307 5.99353 16.5083 5.99806C15.5875 6.05238 14.788 6.69066 14.5319 7.5915C14.1411 8.97672 13.2518 12.0957 12.4118 14.9884C12.4073 14.9974 12.4073 15.0065 12.4028 15.0155C12.3894 15.0698 12.3714 15.1196 12.3579 15.1694C12.3534 15.1875 12.3489 15.2056 12.34 15.2238C12.331 15.26 12.3175 15.3007 12.3085 15.3369C12.2995 15.3641 12.2905 15.3912 12.2861 15.4184C12.2816 15.441 12.2726 15.4637 12.2681 15.4818C12.2277 15.6266 12.1827 15.7715 12.1423 15.9118V15.9164C12.1288 15.9662 12.1154 16.0114 12.1019 16.0612C12.0974 16.0703 12.0974 16.0793 12.0929 16.0884C12.0794 16.1336 12.066 16.1834 12.0525 16.2287C12.0525 16.2332 12.048 16.2378 12.048 16.2423C11.9851 16.455 11.9267 16.6633 11.8683 16.8625L11.8324 16.9892C11.3922 18.4921 11.0104 19.7913 10.422 20.6288L10.4175 20.6333C10.4085 20.6424 10.3995 20.656 10.395 20.665L10.3411 20.7329C10.3277 20.751 10.3097 20.7691 10.2962 20.7872C10.2827 20.8008 10.2693 20.8189 10.2558 20.8325C10.2423 20.8506 10.2243 20.8642 10.2109 20.8823C10.1974 20.8959 10.1839 20.914 10.166 20.9276C10.1525 20.9411 10.1345 20.9547 10.121 20.9728L10.0941 21H17.1506C18.9832 21.0045 20.497 18.9358 21.7816 14.6715ZM5.91677 17.0254L6.60401 19.4156C6.86902 20.3255 7.67304 20.9638 8.61181 21C9.07895 20.9864 9.42033 20.8008 9.66288 20.5835C9.68534 20.5654 9.70331 20.5428 9.72576 20.5247L9.73026 20.5201L9.78416 20.4658L9.79763 20.4522C9.81111 20.4341 9.82458 20.4206 9.83806 20.4025C9.84704 20.3934 9.85602 20.3798 9.86501 20.3708C9.87399 20.3617 9.88297 20.3527 9.88747 20.3436C9.90543 20.321 9.91891 20.3029 9.93238 20.2848C10.3995 19.6148 10.7409 18.56 11.1092 17.3242C11.1452 17.2065 11.1766 17.0888 11.2125 16.9711C11.226 16.9213 11.2395 16.8715 11.2574 16.8263L11.2934 16.6995C11.3069 16.6497 11.3248 16.5954 11.3383 16.5456C11.3518 16.5003 11.3652 16.4505 11.3787 16.4007C11.3787 16.3962 11.3832 16.3871 11.3832 16.3826C11.4551 16.1427 11.527 15.8982 11.5988 15.6493C11.6078 15.6131 11.6213 15.5768 11.6303 15.5406C11.6348 15.527 11.6392 15.5089 11.6437 15.4954C11.6842 15.3641 11.7201 15.2283 11.7605 15.0879C11.3024 15.4139 10.7409 15.604 10.1525 15.604H4.95554C5.4092 15.9616 5.75058 16.4505 5.91677 17.0254Z" fill="currentColor"/>
  </svg>
);

const GrokIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.98406 5.31969C8.55928 2.74796 12.3248 2.05683 15.5196 3.27297L15.7365 3.35879C16.4532 3.62495 17.078 4.0036 17.5653 4.35557L14.8599 5.60419C12.341 4.54799 9.45534 5.26644 7.69416 7.0267C5.31244 9.40508 4.83112 13.5294 7.62253 16.1944L0 23C0.40275 22.4457 0.886594 21.9169 1.38281 21.3924L1.92797 20.8187L2.17247 20.5591C3.62841 19.0004 4.87341 17.3987 4.09397 15.2519L4.02216 15.0666C2.65416 11.7446 3.45075 7.85156 5.98406 5.31969ZM20.6988 3.29946L24 0L23.0505 1.31666C21.0729 4.09765 20.1952 5.84845 21.0714 9.61387L21.0653 9.60779C21.7432 12.4835 21.0182 15.6724 18.6773 18.012C15.7263 20.9635 11.0037 21.6205 7.11459 18.9637L9.82612 17.709C12.3082 18.6833 15.0238 18.2555 16.9755 16.305C18.9272 14.3543 19.3655 11.5134 18.3846 9.14922C18.1981 8.70094 17.6391 8.58845 17.2478 8.87698L9.26906 14.7636L20.6987 3.28926L20.6988 3.29946Z" fill="currentColor"/>
  </svg>
);

const DeepSeekIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-4' }) => (
  <svg className={className} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.7782 1.34109C20.5567 1.22646 20.4582 1.44298 20.331 1.55337C20.2859 1.58733 20.249 1.63403 20.2121 1.67649C19.888 2.03736 19.5065 2.27086 19.0101 2.24539C18.284 2.20293 17.6646 2.44068 17.119 3.01383C17.0041 2.30483 16.6144 1.88452 16.0278 1.61281C15.7202 1.4727 15.4084 1.3326 15.191 1.02268C15.0392 0.806154 14.9982 0.559914 14.9243 0.322164C14.8751 0.177816 14.83 0.0292224 14.6659 0.00374925C14.4895 -0.0259695 14.4239 0.12687 14.3541 0.254236C14.0793 0.77219 13.9726 1.34109 13.9849 1.92273C14.0095 3.22186 14.5387 4.25777 15.593 4.99649C15.712 5.0814 15.7448 5.16631 15.7078 5.28943C15.634 5.54417 15.552 5.79041 15.474 6.04514C15.4248 6.20647 15.3551 6.24043 15.1869 6.1725C14.6085 5.92202 14.108 5.55266 13.6691 5.10688C12.9183 4.35542 12.2415 3.52754 11.3964 2.87797C11.1995 2.72513 10.9985 2.58503 10.7934 2.45342C9.93194 1.58733 10.9083 0.874083 11.1339 0.789172C11.3718 0.700016 11.2159 0.398584 10.4529 0.402829C9.68991 0.407075 8.99253 0.670297 8.10236 1.02268C7.97108 1.07362 7.83571 1.11608 7.69624 1.1458C6.8881 0.988712 6.05125 0.950503 5.17338 1.0524C3.52429 1.24344 2.20748 2.05009 1.23526 3.42565C0.070233 5.0814 -0.200513 6.96217 0.131766 8.92785C0.484556 10.9954 1.50601 12.7106 3.07305 14.048C4.69752 15.4363 6.57223 16.1155 8.70538 15.9839C10.0017 15.9075 11.4457 15.7249 13.0783 14.2984C13.4886 14.5107 13.9193 14.5956 14.6372 14.6593C15.1869 14.7103 15.7202 14.6296 16.1304 14.5447C16.7744 14.4046 16.7293 13.789 16.4955 13.6744C14.6085 12.7658 15.0228 13.1352 14.6454 12.8337C15.6053 11.662 17.0493 10.4393 17.6113 6.49092C17.6564 6.17675 17.6195 5.98146 17.6113 5.72672C17.6072 5.56964 17.6441 5.5102 17.8123 5.49322C18.284 5.43803 18.7435 5.30217 19.166 5.06442C20.3885 4.3724 20.8807 3.23884 20.9956 1.88027C21.012 1.668 20.9915 1.45148 20.7782 1.34109ZM10.1329 13.5852C8.30336 12.0993 7.41729 11.6068 7.05219 11.628C6.71171 11.6492 6.77324 12.0526 6.84708 12.32C6.92502 12.579 7.02758 12.7616 7.17115 12.9908C7.26961 13.1437 7.33934 13.3687 7.0727 13.5385C6.48198 13.9164 5.46053 13.4111 5.41131 13.3857C4.22167 12.6597 3.22483 11.7002 2.52335 10.3883C1.84649 9.12739 1.45268 7.77307 1.38704 6.32959C1.37063 5.98146 1.46909 5.85834 1.80547 5.79465C2.2485 5.70974 2.70385 5.69276 3.14279 5.76069C5.00929 6.04089 6.59685 6.90698 7.92596 8.27404C8.68487 9.05097 9.25918 9.98499 9.854 10.8935C10.4857 11.8573 11.1626 12.7785 12.0241 13.5343C12.3276 13.7975 12.5697 14.0013 12.8035 14.1456C12.102 14.222 10.9329 14.239 10.1329 13.5852ZM11.0067 7.75184C11.0067 7.59476 11.1257 7.47164 11.2775 7.47164C11.3103 7.47164 11.3431 7.48013 11.3718 7.48862C11.4087 7.50136 11.4457 7.52258 11.4703 7.55655C11.5195 7.60749 11.5441 7.67542 11.5441 7.75184C11.5441 7.90893 11.4251 8.03205 11.2734 8.03205C11.1257 8.03205 11.0067 7.90893 11.0067 7.75184ZM13.7265 9.19532C13.5501 9.2675 13.3778 9.33118 13.2096 9.33967C12.9512 9.35241 12.664 9.24627 12.5122 9.11041C12.2743 8.90238 12.102 8.78775 12.0282 8.42264C11.9953 8.26555 12.0159 8.0278 12.0405 7.89194C12.102 7.59476 12.0323 7.40371 11.8313 7.23389C11.6672 7.09378 11.458 7.05558 11.2282 7.05558C11.1421 7.05558 11.0641 7.01737 11.0067 6.9834C10.9124 6.93246 10.8303 6.80933 10.9083 6.66074C10.9329 6.60979 11.0477 6.49092 11.0765 6.46969C11.3882 6.28713 11.7492 6.34657 12.0774 6.48243C12.3851 6.61404 12.6189 6.85179 12.9553 7.19143C13.2957 7.599 13.3573 7.71363 13.5542 8.01931C13.7101 8.25706 13.8495 8.50755 13.9439 8.78775C14.0054 8.96606 13.9316 9.11041 13.7265 9.19532Z" fill="currentColor"/>
  </svg>
);

const ANSWER_ENGINES = [
  { name: 'ChatGPT', icon: ChatGPTIcon },
  { name: 'Perplexity', icon: PerplexityIcon },
  { name: 'Gemini', icon: GeminiIcon },
  { name: 'Claude', icon: ClaudeIcon },
  { name: 'Copilot', icon: CopilotIcon },
  { name: 'Grok', icon: GrokIcon },
  { name: 'deepseek', icon: DeepSeekIcon },
];

export const AEO: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-[#0B0F19] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-20 sm:pt-28 md:pt-32 pb-[40px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1152px] mx-auto text-left">
          {/* Eyebrow (Manrope, 500 Medium, #A1A1AA) */}
          <div className="flex items-center gap-2 font-['Manrope',sans-serif] font-[500] text-[13px] sm:text-[14px] uppercase tracking-wider text-[#A1A1AA] mb-5 sm:mb-6">
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
            <span>AEO PLATFORM</span>
          </div>

          {/* Main Headline (Figma: Plus Jakarta Sans, Semibold, 76px/79px, -1.8px letter spacing, #0D0D0D) */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] font-semibold tracking-[-1.8px] leading-[1.05] sm:leading-[79px] text-[#0D0D0D] mb-6 sm:mb-7">
            Make your brand
            <br />
            visible in AI Search
          </h1>

          {/* Subtitle (Figma: Manrope, 500 Medium, 18px/28px, 0px letter spacing, #A1A1AA) */}
          <p className="font-['Manrope',sans-serif] font-[500] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] tracking-[0px] text-[#A1A1AA] max-w-2xl mb-8 sm:mb-10">
            Search is moving beyond traditional results. Coirei helps you understand how your brand
            appears across AI-powered search and answer engines and shows you where to improve your
            visibility.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[8px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-xs cursor-pointer active:scale-[0.99]"
            >
              Get a Demo
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[8px] bg-white hover:bg-neutral-50 text-[#0B0F19] border border-[#E2E8F0] text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-2xs cursor-pointer active:scale-[0.99]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* 2. GETTING STARTED */}
      <section className="w-full bg-[#FFFFFF] py-[40px] px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1138px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-4">
            Getting Started
          </p>

          {/* Heading */}
          <h2 className="font-['Manrope',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[42px] tracking-[-0.75px] text-[#0D0D0D] mb-4">
            Discover gaps. Optimize content. Get cited.
          </h2>

          {/* Subtitle */}
          <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#94A3B8] leading-relaxed mb-12 sm:mb-14">
            Most teams are live and tracking their AI visibility within a day.
          </p>

          {/* 3 Segmented Getting Started Cards */}
          <div className="w-full max-w-[1138px] bg-white border border-[#D8DBE0] grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-[#D8DBE0] divide-y md:divide-y-0">
            {/* Card 1 */}
            <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[190px] sm:min-h-[196px] overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[19px] font-semibold text-[#0B0F19] tracking-tight mb-2.5">
                  Connect your domain
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[15px] leading-[24px] tracking-[0px] text-[#94A3B8] max-w-[297px]">
                  Coirei scans your site and maps every page against how AI engines currently read it.
                </p>
              </div>
              {/* Faint Watermark Number (Bottom Right Corner - flush with edges) */}
              <span className="absolute right-0 bottom-0 font-['Manrope',sans-serif] font-[500] text-[96px] sm:text-[104px] leading-none tracking-[-2px] text-[#000000]/[0.05] pointer-events-none select-none z-0 translate-x-[2px] translate-y-[10px]">
                01
              </span>
            </div>

            {/* Card 2 */}
            <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[190px] sm:min-h-[196px] overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[19px] font-semibold text-[#0B0F19] tracking-tight mb-2.5">
                  See your visibility score
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[15px] leading-[24px] tracking-[0px] text-[#94A3B8] max-w-[297px]">
                  Get a baseline across ChatGPT, Perplexity, and AI Overviews for your key prompts.
                </p>
              </div>
              {/* Faint Watermark Number (Bottom Right Corner - flush with edges) */}
              <span className="absolute right-0 bottom-0 font-['Manrope',sans-serif] font-[500] text-[96px] sm:text-[104px] leading-none tracking-[-2px] text-[#000000]/[0.05] pointer-events-none select-none z-0 translate-x-[2px] translate-y-[10px]">
                02
              </span>
            </div>

            {/* Card 3 */}
            <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[190px] sm:min-h-[196px] overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[19px] font-semibold text-[#0B0F19] tracking-tight mb-2.5">
                  Let agents close the gaps
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[15px] leading-[24px] tracking-[0px] text-[#94A3B8] max-w-[297px]">
                  Coirei drafts and ships the content and fixes needed to earn citations.
                </p>
              </div>
              {/* Faint Watermark Number (Bottom Right Corner - flush with edges) */}
              <span className="absolute right-0 bottom-0 font-['Manrope',sans-serif] font-[500] text-[96px] sm:text-[104px] leading-none tracking-[-2px] text-[#000000]/[0.05] pointer-events-none select-none z-0 translate-x-[2px] translate-y-[10px]">
                03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW COIREI WORKS */}
      <section className="w-full bg-[#FFFFFF] py-[40px] px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1138px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="font-['Manrope',sans-serif] text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
            HOW COIREI WORKS
          </p>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[34px] sm:text-[44px] md:text-[48px] text-[#0D0D0D] tracking-tight leading-[1.12] mb-4">
            One workspace for
            <br />
            your AI search strategy
          </h2>

          {/* Subtitle */}
          <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#94A3B8] leading-relaxed mb-12 sm:mb-14 max-w-[800px]">
            Coirei brings prompt intelligence, AI visibility, crawler analytics, competitive research, and AI-powered workflows together in one place.
          </p>

          {/* Workspace Matrix Container */}
          <div className="w-full max-w-[1138px] bg-white border border-[#D8DBE0] divide-y divide-[#D8DBE0]">
            {/* ROW 1: PROMPT INTELLIGENCE */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-[#D8DBE0]">
              {/* Left Column */}
              <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[0px] text-[#0D0D0D] uppercase mb-2">
                  PROMPT INTELLIGENCE
                </h3>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[16px] text-[#0B0F19] leading-snug mb-2.5">
                  Know what people are asking AI
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8]">
                  Discover the questions your audience is asking across ChatGPT, Perplexity, Gemini, Claude, and other answer engines.
                </p>
              </div>
              {/* Right Column */}
              <div className="md:col-span-7 divide-y divide-[#D8DBE0] border-t md:border-t-0 border-[#D8DBE0]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    PROMPT DISCOVERY
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Find relevant prompts across your category, products, competitors, and buyer journeys.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    SEARCH INTENT
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Understand what users are looking for and why they're asking.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    PROMPT TRENDS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Track emerging questions and changes in AI search behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 2: AI VISIBILITY */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-[#D8DBE0]">
              {/* Left Column */}
              <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[0px] text-[#0D0D0D] uppercase mb-2">
                  AI VISIBILITY
                </h3>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[16px] text-[#0B0F19] leading-snug mb-2.5">
                  See how your brand appears in AI search.
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8]">
                  Monitor how AI platforms mention, recommend, and describe your brand across important customer queries.
                </p>
              </div>
              {/* Right Column */}
              <div className="md:col-span-7 divide-y divide-[#D8DBE0] border-t md:border-t-0 border-[#D8DBE0]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    BRAND MENTIONS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Track when and where your brand appears in AI-generated answers.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    VISIBILITY TRACKING
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Measure your presence across different prompts and answer engines.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    CITATION INSIGHTS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    See which sources AI uses when discussing your brand and competitors.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 3: COMPETITOR INSIGHTS */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-[#D8DBE0]">
              {/* Left Column */}
              <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[0px] text-[#0D0D0D] uppercase mb-2">
                  COMPETITOR INSIGHTS
                </h3>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[16px] text-[#0B0F19] leading-snug mb-2.5">
                  Know how you compare in AI search.
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8]">
                  Analyze competitors to understand their visibility, positioning, content presence, and opportunities you can act on.
                </p>
              </div>
              {/* Right Column */}
              <div className="md:col-span-7 divide-y divide-[#D8DBE0] border-t md:border-t-0 border-[#D8DBE0]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    COMPETITOR VISIBILITY
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Compare how often competitors appear across relevant AI queries.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    MARKET POSITIONING
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Understand how AI describes and positions competing brands.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    CONTENT GAPS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Identify topics and questions where competitors have stronger coverage.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 4: CRAWLER ANALYTICS */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-[#D8DBE0]">
              {/* Left Column */}
              <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[0px] text-[#0D0D0D] uppercase mb-2">
                  CRAWLER ANALYTICS
                </h3>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[16px] text-[#0B0F19] leading-snug mb-2.5">
                  Understand how AI crawlers see your website.
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8]">
                  Monitor crawler activity and website accessibility to uncover issues that may affect how your content is discovered and understood.
                </p>
              </div>
              {/* Right Column */}
              <div className="md:col-span-7 divide-y divide-[#D8DBE0] border-t md:border-t-0 border-[#D8DBE0]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    CRAWLER ACTIVITY
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    See which AI crawlers are visiting your website and what they access.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    CRAWL ACCESS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Identify blocked, restricted, or inaccessible pages.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    TECHNICAL SIGNALS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Find website issues that can limit AI discovery and content visibility.
                  </p>
                </div>
              </div>
            </div>

            {/* ROW 5: AEO WORKFLOWS */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-[#D8DBE0]">
              {/* Left Column */}
              <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px] tracking-[0px] text-[#0D0D0D] uppercase mb-2">
                  AEO WORKFLOWS
                </h3>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[16px] text-[#0B0F19] leading-snug mb-2.5">
                  Turn insights into action automatically.
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8]">
                  Use AI-powered workflows to move from research and analysis to execution without managing every step manually.
                </p>
              </div>
              {/* Right Column */}
              <div className="md:col-span-7 divide-y divide-[#D8DBE0] border-t md:border-t-0 border-[#D8DBE0]">
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    RESEARCH AGENTS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Automate market, audience, and competitor research.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    CONTENT WORKFLOWS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Turn search insights into structured content opportunities and briefs.
                  </p>
                </div>
                <div className="p-5 sm:p-6 lg:p-7">
                  <h4 className="font-['Manrope',sans-serif] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.08em] text-[#0B0F19] mb-1.5">
                    ACTION AGENTS
                  </h4>
                  <p className="font-['Manrope',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[22px] text-[#94A3B8]">
                    Let AI handle repetitive tasks, updates, and follow-ups across your workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE */}
      <section className="w-full bg-[#FFFFFF] py-[40px] px-6 sm:px-8 lg:px-12 border-t border-[#F1F5F9]">
        <div className="max-w-[1138px] mx-auto text-left">
          {/* Eyebrow */}
          <p className="font-['Manrope',sans-serif] text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#8592A6] mb-3">
            ENTERPRISE
          </p>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[34px] sm:text-[44px] md:text-[48px] text-[#0D0D0D] tracking-tight leading-[1.12] mb-4">
            Enterprise Control, Built for Scale
          </h2>

          {/* Subtitle */}
          <p className="font-['Manrope',sans-serif] font-normal text-[15px] sm:text-[16px] text-[#94A3B8] leading-relaxed mb-12 sm:mb-14 max-w-[800px]">
            Security, control, and support built for organizations running AI search strategy across multiple brands, markets, and teams.
          </p>

          {/* 6 Grid Cards Container (2 rows x 3 cols) */}
          <div className="w-full max-w-[1138px] bg-white border border-[#D8DBE0] divide-y divide-[#D8DBE0]">
            {/* Top Row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#D8DBE0]">
              {/* Card 1 */}
              <div className="group p-6 sm:p-8 lg:p-9 flex flex-col justify-start min-h-[170px] bg-white hover:bg-[#0D0D0D] transition-colors duration-300 cursor-pointer">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#0B0F19] group-hover:text-white transition-colors duration-300 tracking-tight mb-2.5">
                  Single sign-on (SSO/SAML)
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300">
                  Enterprise-grade authentication that fits your existing identity provider.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-6 sm:p-8 lg:p-9 flex flex-col justify-start min-h-[170px] bg-white hover:bg-[#0D0D0D] transition-colors duration-300 cursor-pointer">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#0B0F19] group-hover:text-white transition-colors duration-300 tracking-tight mb-2.5">
                  Role-based access
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300">
                  Control exactly who can view, edit, and ship changes across teams and brands.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-6 sm:p-8 lg:p-9 flex flex-col justify-start min-h-[170px] bg-white hover:bg-[#0D0D0D] transition-colors duration-300 cursor-pointer">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#0B0F19] group-hover:text-white transition-colors duration-300 tracking-tight mb-2.5">
                  Dedicated success manager
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300">
                  A named partner for onboarding, strategy, and rollout across your organization.
                </p>
              </div>
            </div>

            {/* Bottom Row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#D8DBE0]">
              {/* Card 4 */}
              <div className="group p-6 sm:p-8 lg:p-9 flex flex-col justify-start min-h-[170px] bg-white hover:bg-[#0D0D0D] transition-colors duration-300 cursor-pointer">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#0B0F19] group-hover:text-white transition-colors duration-300 tracking-tight mb-2.5">
                  SOC 2 Type II compliance
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300">
                  Data handling and security audited to enterprise standards.
                </p>
              </div>

              {/* Card 5 */}
              <div className="group p-6 sm:p-8 lg:p-9 flex flex-col justify-start min-h-[170px] bg-white hover:bg-[#0D0D0D] transition-colors duration-300 cursor-pointer">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#0B0F19] group-hover:text-white transition-colors duration-300 tracking-tight mb-2.5">
                  Custom SLAs
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300">
                  Guaranteed uptime and response times built directly into your contract.
                </p>
              </div>

              {/* Card 6 */}
              <div className="group p-6 sm:p-8 lg:p-9 flex flex-col justify-start min-h-[170px] bg-white hover:bg-[#0D0D0D] transition-colors duration-300 cursor-pointer">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] text-[#0B0F19] group-hover:text-white transition-colors duration-300 tracking-tight mb-2.5">
                  API & integrations
                </h3>
                <p className="font-['Manrope',sans-serif] font-normal text-[13.5px] sm:text-[14px] leading-[22px] text-[#94A3B8] group-hover:text-white/80 transition-colors duration-300">
                  Connect Coirei into your existing data, CMS, and content workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ANSWER ENGINES TICKER (SCROLLING LEFT IN A LOOP) */}
      <section className="w-full bg-[#0D0D0D] py-[40px] overflow-hidden relative">
        {/* Soft edge fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

        <div className="max-w-[1280px] mx-auto px-6 mb-8 sm:mb-9 text-center">
          <p className="font-['Manrope',sans-serif] text-[14px] sm:text-[15px] font-normal text-[#94A3B8]">
            Track your visibility across leading answer engines
          </p>
        </div>

        {/* Infinite Looping Marquee */}
        <div className="flex overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20 shrink-0">
            {[...ANSWER_ENGINES, ...ANSWER_ENGINES, ...ANSWER_ENGINES, ...ANSWER_ENGINES].map((engine, idx) => {
              const Icon = engine.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 text-white shrink-0 hover:text-white/80 transition-colors"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] sm:text-[18px] tracking-tight whitespace-nowrap">
                    {engine.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="w-full bg-[#FFFFFF] py-[40px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1216px] mx-auto">
          <div className="w-full bg-white rounded-[24px] sm:rounded-[28px] border border-[#F0F2F5] shadow-[0_1px_16px_rgba(37,99,235,0.08),0_4px_24px_rgba(0,0,0,0.02)] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="max-w-xl text-left">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[30px] md:text-[32px] text-[#0D0D0D] tracking-tight leading-snug mb-2">
                See where you stand in AI search
              </h2>
              <p className="font-['Manrope',sans-serif] font-normal text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed">
                Get your free visibility report across six AI answer engines.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <Link
                to="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[8px] bg-[#0B0F19] hover:bg-neutral-800 text-white text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-xs cursor-pointer active:scale-[0.99] whitespace-nowrap"
              >
                Get a Demo
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[8px] bg-white hover:bg-neutral-50 text-[#0B0F19] border border-[#E2E8F0] text-[13.5px] sm:text-[14px] font-medium transition-colors shadow-2xs cursor-pointer active:scale-[0.99] whitespace-nowrap"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AEO;
