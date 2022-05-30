FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/Mental-x3/WhatsAppBot-MD.git /root/LyFE/
WORKDIR /root/LyFE/
RUN yarn install --network-concurrency 1
RUN git clone https://github.com/Mental-x3/lib
CMD ["node", "index.js"]
